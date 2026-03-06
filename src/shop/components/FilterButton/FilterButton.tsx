import {useContext} from "react"
import {MobFilStatus} from '@/shop/pages/Catalog/Catalog'
import './FilterButton.css'

export default function FilterButton() {
    const {setMobiFilter} = useContext(MobFilStatus)!
    return (
        <div id="filterButton" onClick={ ()=>setMobiFilter(true) } role="button" aria-label="Open filters">
            <span>Filter</span>
            <img src="pic/menu.png" alt="|||" className="menuImg" aria-hidden="true" />
        </div>
    )
}
