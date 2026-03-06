import {useState, useContext, useMemo, type ReactNode} from 'react'
import {CartState} from '@/App'
import CartProductCard from '@/shop/components/CartProductCard/CartProductCard'
import fnCartContent from '@/shop/components/Funcs/fnCartContent'
import useFetch from "@/hooks/useFetch"
import './Orders.css'

type Tab = "cart" | "shipping" | "delivered" | "canceled"
type CartItem = [cartID :string, pSize :string, pAmount :number]
type Product = {
    id :string | number
    nails :string[]
    posName :string
    posColor :string
    posSum :number
    [key :string] :unknown
}
type UserData = {
    shippingStuff? :CartItem[]
    deliveredStuff? :CartItem[]
    canceledStuff? :CartItem[]
    [key :string] :unknown
}
type CartContentReduced = {
    content :ReactNode[]
    totalAmount :number
    totalSum :number
}

export default function Orders() {

    const [tab, setTab] = useState<Tab>("cart")
    const tabs :Tab[] = ["cart", "shipping", "delivered", "canceled"]

    const { data :products, loadingStatus :prodLoadStatus } = useFetch<Product[]>("/api/products")
    const { data :userData, loadingStatus :uDataLoadStatus } = useFetch<UserData>("/api/userdata")

    const cartSt = useContext(CartState)
    const cart :CartItem[] = cartSt?.cart ?? []
    const shippings :CartItem[] = cartSt?.shippings ?? []
  
    const isCart = cart.length > 0

    const cartContent = useMemo<ReactNode | null>( ()=>{
        if (!isCart) return null
        if ( !Array.isArray(products) ) return null
        const reduced = fnCartContent({cart, goodsData :products, CartProductCard, noDelBtn: false}) as CartContentReduced | undefined
        return reduced?.content ?? null
    }, [isCart, cart, products] )

    const shippingStuff = userData?.shippingStuff ?? []
    const deliveredStuff = userData?.deliveredStuff ?? []
    const canceledStuff = userData?.canceledStuff ?? []

    const isShippingStuff = shippingStuff.length > 0
    const isShippings = shippings.length > 0
    const shipStuffContent = useMemo<ReactNode | null>( ()=>{
        if (!(isShippings || isShippingStuff)) return null
        if (!Array.isArray(products)) return null

        const reduced = fnCartContent({
            cart: isShippings ? shippings : shippingStuff,
            goodsData: products,
            CartProductCard,
            noDelBtn: true,
        }) as CartContentReduced | undefined

        return reduced?.content ?? null
    }, [isShippings, isShippingStuff, shippings, shippingStuff, products] )

    const isDeliveredStuff = deliveredStuff.length > 0
    const deliveredStuffContent = useMemo<ReactNode | null>( ()=>{
        if (!isDeliveredStuff) return null
        if (!Array.isArray(products)) return null

        const reduced = fnCartContent({
            cart :deliveredStuff,
            goodsData :products,
            CartProductCard,
            noDelBtn :true,
        }) as CartContentReduced | undefined

        return reduced?.content ?? null
    }, [isDeliveredStuff, deliveredStuff, products] )

    const isCanceledStuff = canceledStuff.length > 0
    const canceledStuffContent = useMemo<ReactNode | null>( ()=>{
        if (!isCanceledStuff) return null
        if (!Array.isArray(products)) return null

        const reduced = fnCartContent({
            cart :canceledStuff,
            goodsData :products,
            CartProductCard,
            noDelBtn :true,
        }) as CartContentReduced | undefined

        return reduced?.content ?? null
    }, [isCanceledStuff, canceledStuff, products] )

    let content :ReactNode = null
    if (tab === "cart") content = isCart ? cartContent  : ""
    else if (tab === "shipping") content = shipStuffContent
    else if (tab === "delivered") content = deliveredStuffContent
    else if (tab === "canceled") content = canceledStuffContent

    type FetchStatus = ReturnType<typeof useFetch<unknown>>["loadingStatus"]
    const statusToShow: FetchStatus = prodLoadStatus === "success" ? uDataLoadStatus : prodLoadStatus

    return (
    <>
        {statusToShow === "loading" && <div>Loading products data...</div>}
        {statusToShow === "error" && <div>Something went wrong when loading.</div>}
        {statusToShow === "empty" && <div>Error: No products data</div>}
        {statusToShow === "success" &&
            <main className="ordersMain">
                <h1>Orders</h1>
                <div className="ordersInfo">
                    <nav role="tablist" aria-label="Orders tabs">
                        { tabs.map( name => (
                            <div
                                key={name}
                                className={`ordersTab ${tab === name ? "active" : ""}`}
                                onClick={ ()=>setTab(name) }
                                role="tab"
                                aria-selected={tab === name}
                                aria-controls={`orders-panel-${name}`}
                            >
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                            </div>
                        ))}
                    </nav>
                    <div
                        className="ordersContent"
                        role="tabpanel"
                        aria-labelledby={`orders-tab-${tab}`}
                    >
                    {content}
                    </div>
                </div>
            </main>
        }
    </>
    )
}