import {useEffect} from "react"
import {createPortal} from "react-dom"
import "./ImagePreview.css"

export default function ImagePreview( {src, fnClose} :{src :string, fnClose :()=>void} ) {
    useEffect( ()=>{
        const fnEsc = (event :KeyboardEvent)=>{  if (event.key === "Escape"){ fnClose() }  }
        window.addEventListener("keydown", fnEsc)
        return ()=> window.removeEventListener("keydown", fnEsc)
    }, [])

    return createPortal(
        <div className="imagepreview" onClick={fnClose} role="dialog" aria-modal="true" aria-label="Image preview">
            <img src={`/products/${src}`} className="image" alt="Image Preview" />
        </div>,
        document.body
    )
}
