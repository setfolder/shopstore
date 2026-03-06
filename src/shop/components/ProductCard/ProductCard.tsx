import {Link} from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard(
        {pID, pPic, pName, pNote, pSum}
        :{
            pID :string | number,
            pPic :string,
            pName :string,
            pNote :string,
            pSum :string | number
        }
    ) {

    return (
        <Link
            to={"/product/"+pID}
            className="position"
        >
            <div className="pPic">
                <img src={"/products/"+pPic} alt="PHOTO"/>
            </div>
            <div className="pDescr">
                <div className="pName">{pName}</div>
                <div className="pNote">{pNote}</div>
                <div className="pPrice">
                    <span className="pSign">$</span><span className="pSum">{pSum}</span>
                </div>
            </div>
            <div className="btnAddToCart">Add to cart</div>
        </Link>
    )
}