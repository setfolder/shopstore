import {useContext} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {CartState} from '@/App'
import CartProductCard from '@/shop/components/CartProductCard/CartProductCard'
import Subtotal from '@/shop/components/Subtotal/Subtotal'
import BtnToCheckout from '@/shop/components/BtnToCheckout/BtnToCheckout'
import fnCartContent from '@/shop/components/Funcs/fnCartContent'
import useFetch from "@/hooks/useFetch"
import Overview from '@/shop/pages/Overview/Overview'
import PayResult from '@/shop/pages/PayResult/PayResult'
import './CartPage.css'

export default function CartPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const screen = location.state?.screen
    const {cart} = useContext(CartState)!
    let iscart = cart.length > 0 ? true : false
    
    const { data: products, loadingStatus: loadStatus } = useFetch("/api/products")
    const reduced = !Array.isArray(products) ?
        {content:[], totalAmount:0, totalSum:0} :    // protect from a render before products loading
        fnCartContent({cart, goodsData: products, CartProductCard, noDelBtn: false})
    const content = iscart ? reduced.content : null
    const totalAmount = iscart ? reduced.totalAmount : 0
    const totalSum = iscart ? reduced.totalSum : 0

    if(screen === 'overview') return <Overview/>
    if(screen === 'result') return <PayResult/>

    return (
        <>
        {loadStatus === "loading" && <div>Loading products data...</div>}
        {loadStatus === "error" && <div>Something went wrong when loading.</div>}
        {loadStatus === "empty" && <div>Error: No products data</div>}
        {loadStatus === "success" &&
            <main className="cartPageMain">
                <div className="shopping">
                    <hgroup className='cartHeader'><h2>Shopping Cart</h2></hgroup>
                    {iscart ? content : ""}
                    <div className="upSubTotal"><Subtotal items={iscart ? totalAmount : 0} sum={iscart ? totalSum : 0} /></div>
                </div>
                <div className="total">
                    <Subtotal items={iscart ? totalAmount : 0} sum={iscart ? totalSum : 0} />
                    <BtnToCheckout
                        inactive={iscart ? false : true}
                        fn={iscart ? ()=>navigate('/cart', {state:{screen:'overview'}}) : undefined}
                    />
                </div>
            </main>
        }
    </>
    )
}