import { useNavigate } from 'react-router-dom'
import './BtnPlaceOrder.css'

export default function BtnPlaceOrder() {
    const navigate = useNavigate()
    return (
        <div
            className="btnPlaceOrder"
            onClick={  ()=>navigate( '/cart', {state:{screen:'result'}} )  }
            role="button"
        >
        Place the order
        </div>
    )
}