import {useContext} from "react"
import {MobFilStatus} from '@/shop/pages/Catalog/Catalog'
import './BtnClose.css'

interface MobFilContextValue {
    setMobiFilter :React.Dispatch<React.SetStateAction<boolean>>
}

export default function BtnClose() {
    const {setMobiFilter} = useContext(MobFilStatus) as MobFilContextValue
    return (
        <div className="btnClose"  onClick={ ()=>setMobiFilter(false) } role="button" aria-label="Close filters">
            <img src="pic/close.png" alt="X" aria-hidden="true"/>
        </div>
    )
}
