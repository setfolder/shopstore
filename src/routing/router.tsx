import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "@/App"
import ShopLayout from "@/shop/ShopLayout/ShopLayout"
import Catalog from '@/shop/pages/Catalog/Catalog'
import ProductPage from '@/shop/pages/ProductPage/ProductPage'
import CartPage from '@/shop/pages/CartPage/CartPage'
import About from '@/shop/pages/About/About'
import Delivery from '@/shop/pages/Delivery/Delivery'
import Terms from '@/shop/pages/Terms/Terms'
import Contacts from '@/shop/pages/Contacts/Contacts'
import Orders from '@/shop/pages/Orders/Orders'
import Settings from '@/shop/pages/Settings/Settings'
import NotFound from "@/routing/NotFound/NotFound"
import RequireAuth from "@/routing/RequireAuth/RequireAuth"

export const router = createBrowserRouter([
    {
        path: "/index.html",
        element: <Navigate to="/" replace />
    },
    {
        path: "/",
        element: <App />,
        children: [{
            element: <ShopLayout />,
            children: [
                { index: true, element: <Catalog /> },
                { path: "product/:id", element: <ProductPage /> },
                { path: "about", element: <About /> },
                { path: "delivery", element: <Delivery /> },
                { path: "terms", element: <Terms /> },
                { path: "contacts", element: <Contacts /> },
                {
                    element: <RequireAuth/>,
                    children: [
                        { path: "cart", element: <CartPage /> },
                        { path: "orders", element: <Orders /> },
                        { path: "settings", element: <Settings /> }
                    ]
                },            
                { path: "*", element: <NotFound /> }
            ]
        }]
    }
])