import './ProductPhoto.css'

export default function ProductPhoto( {src, func} :{src :string, func :(src :string)=>void} ) {
    return (
        <div className="photo">
            <img src={`/products/${src}`} alt="Product Photo" onClick={ ()=> func(src) } role="button" aria-label="Open image preview" />
        </div>
    )
}
