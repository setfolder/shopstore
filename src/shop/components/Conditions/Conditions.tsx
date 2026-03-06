import { Link } from 'react-router-dom'
import './Conditions.css'

export default function Conditions() {
    return (
        <div className="conditions">
            <span>By placing your order, you agree to </span><br/>
            <Link  to="/terms"  className="condLink" role="button">conditions of use</Link>
        </div>
    )
}