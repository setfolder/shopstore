import './Subtotal.css'

export default function Subtotal( {items, sum} :{items :number, sum :number} ) {
    return  <div className="subTotal">Subtotal ({items} items): <span>${sum.toFixed(2)}</span></div>
}
