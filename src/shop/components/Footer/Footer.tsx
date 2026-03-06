import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="toTop" onClick={  ()=>{ window.scrollTo({top:0, behavior:"smooth"}) }  } role="button" aria-label="Back to top">
                <span>Back to top</span>
            </div>
            <div className="bottom">
                <div className="menu">
                    <Link to="/about">About Us</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/delivery">Delivery</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}