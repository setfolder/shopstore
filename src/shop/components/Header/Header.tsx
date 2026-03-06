import LoginLabel from '@/shop/components/LoginLabel/LoginLabel'
import SiteName from '@/shop/components/SiteName/SiteName'
import Cart from '@/shop/components/Cart/Cart'
import './Header.css'

export default function Header() {
    return (
        <header className="appHeader">
            <hgroup>
                <LoginLabel />
                <SiteName />
                <Cart />
            </hgroup>
        </header>
    )
}
