import {useContext} from 'react'
import {CartState} from '@/App'
import './BtnDelete.css'

type CartItem = [string, string, number]

interface CartContextValue {
    cart :CartItem[]
    setCart :React.Dispatch<React.SetStateAction<CartItem[]>>
}

export default function BtnDelete( {posID} :{posID :string|number} ) {
    const {cart, setCart} = useContext(CartState) as CartContextValue
    function delPos() {
        setCart(  cart.filter( pos=> pos[0].toString() !== posID.toString() )  )
    }
    return  <span className="btnDelete" onClick={delPos} role="button">Delete</span>
}