import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {LoginState} from '@/App'
import {CartState} from '@/App'
import './Cart.css'

export default function Cart() {

    const {loggedIn, setLoginWinOpened} = useContext(LoginState)!
    const {cart} = useContext(CartState)!
    const navigate = useNavigate()

    return (
        <div className="cartField">
            <div
                className="cartLook"
                onClick={ loggedIn ? ()=>navigate('/cart') : ()=>setLoginWinOpened(true) }
                role="button"
                aria-label="Open cart"
            >
                <img
                    className="cartPic"
                    src={ loggedIn && cart.length ? "/pic/cart-full.png" : "/pic/cart.png" }
                    alt="•"
                />
                <span>Cart</span>
            </div>
        </div>
    )

}