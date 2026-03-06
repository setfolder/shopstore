import { Outlet } from "react-router-dom"
import Header from '@/shop/components/Header/Header'
import Footer from '@/shop/components/Footer/Footer'
import './ShopLayout.css'

export default function ShopLayout() {
    return (
        <div id="cover">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
