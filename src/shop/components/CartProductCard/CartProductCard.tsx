import BtnDelete from '@/shop/components/BtnDelete/BtnDelete'
import './CartProductCard.css'

export default function CartProductCard(
        {pID, pPic, pName, pSize, pColor, pSum, pAmount, noDelBtn}
        :{
            pID :string | number,
            pPic :string,
            pName :string,
            pSize :string | number,
            pColor :string,
            pSum :string | number,
            pAmount :number,
            noDelBtn? :boolean
        }
    ) {
    return (
        <article className="cartPosition">
            <img src={"/products/"+pPic} alt="Product Photo" className='psPhoto'/>
            <div className="psDescr">
                <div className="psName">{pName}</div>
                <div className="psSize"><span>Size: </span> {pSize}</div>
                <div className="psColor">Color
                    <span className="circle"  style={{backgroundColor:pColor}} ></span>
                </div>
                <div className="psAmount">Amount: {pAmount}</div>
                <div className="psPrice">
                    <span className="psSign">$</span><span className="psSum">{pSum}</span>
                </div>
                { noDelBtn ? "" :
                    <div className="btnDelFolder">
                        <BtnDelete posID={pID+"-"+pSize} />
                    </div>
                }
            </div>
        </article>
    )
}
