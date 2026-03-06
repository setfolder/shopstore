import './BtnToCheckout.css'

export default function BtnToCheckout( {inactive, fn} :{inactive :boolean, fn? :()=>void}  ) {
    return (
        <div
            className={`btnToCheckout ${inactive ? "inactive":""}`}
            onClick={!inactive ? fn : undefined}
            role="button"
            aria-disabled={inactive}
        >
        Proceed&nbsp;to checkout
        </div>
    )  
}
