import {useContext} from 'react'
import {LoginState} from '@/App'
import {CartState} from '@/App'
import './BtnAddToCart.css'

type CartItem = [string, string, number]

interface LoginContextValue {
    setLoginWinOpened :(opened :boolean) => void
    loggedIn :boolean
}

interface CartContextValue {
    cart :CartItem[]
    setCart :React.Dispatch<React.SetStateAction<CartItem[]>>
}

interface BtnAddToCartProps {
    id :string | number
    size :string | number
    amount :number
    type? :string
}

export default function BtnAddToCart( {id, size, amount, type} :BtnAddToCartProps ) {

    const {setLoginWinOpened, loggedIn} = useContext(LoginState) as LoginContextValue
    const {cart, setCart} = useContext(CartState) as CartContextValue
    const cartID = id.toString() +"-"+ size.toString()

    function fnAddToCart() :void {
        if (amount <= 0) return
        const found = cart.find( pos => pos[0] === cartID && pos[1] === size.toString() );
        if (found) {
            setCart( prev =>
                prev.map( pos =>
                    pos[0] === cartID  &&  pos[1] === size.toString()  ?
                    [pos[0], pos[1], pos[2] + amount]
                    : pos
                )
            )
        } else {
            setCart( prev => [...prev, [cartID, size.toString(), amount]] )
        }
    }

    return (
        <div
            className={`btnAddToCart ${type==="big"?"big":""}`}
            onClick={ loggedIn ? fnAddToCart : ()=>setLoginWinOpened(true) }
            role="button"
            aria-disabled={amount <= 0}
        >
        Add to cart
        </div>
    )

}