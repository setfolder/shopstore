import {useState, useEffect, createContext, type Dispatch, type SetStateAction} from 'react'
import { Outlet } from "react-router-dom"
import Login from '@/login/components/Login/Login'
import './App.css'

type LoginContextType = {
    loginWinOpened :boolean
    setLoginWinOpened :Dispatch<SetStateAction<boolean>>
    userMenuOpened :boolean
    setUserMenuOpened :Dispatch<SetStateAction<boolean>>
    loggedIn :boolean
    setLoggedIn :Dispatch<SetStateAction<boolean>>
}
type CartItem = [string, string, number]
type CartContextType = {
    cart :CartItem[]
    setCart :Dispatch<SetStateAction<CartItem[]>>
    shippings :CartItem[]
    setShippings :Dispatch<SetStateAction<CartItem[]>>
}

export const LoginState = createContext<LoginContextType | null>(null)
export const CartState = createContext<CartContextType | null>(null)

function readCartFromLS(key :string) :CartItem[] {
    try {
        const raw = localStorage.getItem(key)
        const parsed = raw ? JSON.parse(raw) : []
        return parsed ? parsed as CartItem[] : []
    } catch { return [] }
}

export default function App() {

        const [ loginWinOpened, setLoginWinOpened ] = useState(false)
        const [ userMenuOpened, setUserMenuOpened ] = useState(false)
        const [ loggedIn, setLoggedIn ] = useState( localStorage.getItem('loggedIn') === 'true' )
        const [ cart, setCart ] = useState<CartItem[]>( readCartFromLS('cart') )
        const [ shippings, setShippings ] = useState<CartItem[]>( readCartFromLS('shippings') )

        useEffect( ()=>{
            localStorage.setItem( 'loggedIn', String(loggedIn) )
        }, [loggedIn] )

        useEffect( ()=>{
            localStorage.setItem( 'cart', JSON.stringify(cart) )
        }, [cart] )

        useEffect( ()=>{
            localStorage.setItem( 'shippings', JSON.stringify(shippings) )
        }, [shippings] )

        return (
            <LoginState.Provider value={{loginWinOpened, setLoginWinOpened, userMenuOpened, setUserMenuOpened, loggedIn, setLoggedIn}}>
            <CartState.Provider value={{cart, setCart, shippings, setShippings }}>
                <Outlet/>
                {loginWinOpened && <Login />}
            </CartState.Provider>
            </LoginState.Provider>
        )

}