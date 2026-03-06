import {useEffect, useContext} from "react"
import {createPortal} from "react-dom"
import {LoginState} from '@/App'
import "./Modal.css"

export default function Modal({content} :{content :React.ReactNode}) {

    const {setLoginWinOpened} = useContext(LoginState)!

    function fnClose() {
        return setLoginWinOpened(false)
    }

    useEffect( ()=>{
        const fnEsc = (e :KeyboardEvent)=>{  if (e.key === "Escape"){ fnClose() }  }
        window.addEventListener("keydown", fnEsc)
        return ()=> window.removeEventListener("keydown", fnEsc)
    }, [])

    // switch off scroll bar
    useEffect( ()=>{
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return ()=>{document.body.style.overflow = originalOverflow}
    }, [])
    
    return createPortal(
        <div className="modalOverlay" role="presentation">
            <div className="contentField" role="dialog" aria-modal="true" aria-label="Modal dialog">
                <div className="btnCloseModal" onClick={fnClose} role="button" aria-label="Close dialog">
                    <img src="/pic/close.png" alt="X" aria-hidden="true"/>
                </div>
                {content}
            </div>
        </div>,
        document.body
    )

}
