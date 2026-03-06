import './Quantity.css'

export default function Quantity(
        {totalAmount, amount, setAmount}
        :{
            totalAmount :number,
            amount :number,
            setAmount :(v :number) => void
        }
    ) {
    function fnQMinus() {
        if( amount > 0 ) {  setAmount(amount-1)  }
    }
    function fnQPlus(total :number) {
        if( amount < total ) {  setAmount(amount+1)  }
    }
    return (
        <div className="posQuantity">
            <span>Quantity:</span>
            <div className="qMinus" onClick={fnQMinus} role="button" aria-label="Decrease quantity" aria-disabled={amount <= 0}>
                <img src="/pic/minus.png" alt="-" aria-hidden="true" />
            </div>
            <div className="qAmount">{amount}</div>
            <div className="qPlus" onClick={ () => fnQPlus(totalAmount) } role="button" aria-label="Increase quantity" aria-disabled={amount >= totalAmount}>
                <img src="/pic/plus.png" alt="+" aria-hidden="true" />
            </div>
        </div>
    )
}