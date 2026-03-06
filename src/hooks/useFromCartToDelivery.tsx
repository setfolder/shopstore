import {useContext, useEffect} from 'react'
import {LoginState, CartState} from '@/App'
import useFetch from '@/hooks/useFetch'

type CartItemTuple = [key :string, size :string, amount :number]

type UseFetchResult<T> = {
    data : T | undefined
    loadingStatus : "loading" | "success" | "empty" | "error"
}

export default function useFromCartToDelivery(shouldRun :boolean) :void {

    const loginSt = useContext(LoginState)
    const cartSt = useContext(CartState)
    if (!loginSt || !cartSt){ console.warn('useFromCartToDelivery: LoginState or CartState missing') }
    const loggedIn = loginSt?.loggedIn ?? false
    const cart :CartItemTuple[] = cartSt?.cart ?? []
    const setCart = cartSt?.setCart
    const setShippings = cartSt?.setShippings

    const { data : userData, loadingStatus } = useFetch("/api/userdata") as UseFetchResult<{shippingStuff? :unknown}>

    useEffect( ()=>{

        if (!shouldRun) return
        if (!loggedIn) return
        if (loadingStatus !== 'success') return
        if (!setCart || !setShippings) return

        const prevShipping :CartItemTuple[] = Array.isArray(userData?.shippingStuff) ? (userData.shippingStuff as CartItemTuple[]) : []

        const map = new Map<string, CartItemTuple>()
        for(const  [key, size, amount] of [...prevShipping, ...cart] ) {
            const existing = map.get(key)
            if (!existing) map.set( key, [key, size.toString(), amount] )
            else existing[2] += amount
        }

        setShippings( Array.from(map.values()) )
        setCart([])

    }, [shouldRun, loggedIn, loadingStatus, userData])

}