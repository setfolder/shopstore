import {memo} from "react"
import './Nail.css'

function Nail( {src, isActive, func} :{src :string, isActive :boolean, func :(src: string) =>void} ) {
    let classes = isActive ? "nail nailSelected" : "nail"
    return (
        <div className={classes} onClick={ ()=>func(src) } role="button" aria-pressed={isActive} aria-label="Select product photo">
            <img src={`/products/${src}`} alt="photo" aria-hidden="true"/>
        </div>
    )
}

export default memo(Nail)
