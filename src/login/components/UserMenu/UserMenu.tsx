import {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {LoginState} from '@/App'
import "./UserMenu.css"

export default function UserMenu() {
    const navigate = useNavigate()
    const {loggedIn, setLoggedIn, setLoginWinOpened, setUserMenuOpened} = useContext(LoginState)!
    function fnGotoOrders() {
        if(loggedIn) {
            navigate('/orders')
            setUserMenuOpened(false)
        } else {
            setLoginWinOpened(true)
        }
    }
    function fnGotoSettings() {
        if(loggedIn) {
            navigate('/settings')
            setUserMenuOpened(false)
        } else {
            setLoginWinOpened(true)
        }
    }
    function fnSignOut() {
        setLoggedIn(false)
        navigate('/')
        setUserMenuOpened(false)
    }
    return (
        <div className="userMenu" role="menu" aria-label="User menu">
            <div onClick={fnGotoOrders} role="menuitem">Orders</div>
            <div onClick={fnGotoSettings} role="menuitem">Settings</div>
            <div onClick={fnSignOut} role="menuitem">Sign out</div>
        </div>
    )
}