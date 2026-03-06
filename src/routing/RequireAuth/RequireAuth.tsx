import {useContext} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {LoginState} from '@/App'

export default function RequireAuth() {
    const {loggedIn} = useContext(LoginState)!
    return  loggedIn ? <Outlet /> : <Navigate to="/" replace />
}