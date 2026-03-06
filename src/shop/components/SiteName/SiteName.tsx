import {Link} from 'react-router-dom'
import './SiteName.css'

export default function SiteName( {type=undefined} :{type? :"small"} ) {
    const classes = type === "small" ? "siteName small" : "siteName"
    return (
        <Link to="/" className='siteLink' aria-label="Go to homepage">
            <h1 className={classes}>SHOPSTORE</h1>
        </Link>
    )  
}