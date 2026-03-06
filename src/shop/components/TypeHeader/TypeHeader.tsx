import {useContext} from "react"
import {FiltersStatus} from '@/shop/pages/Catalog/Catalog'
import './TypeHeader.css'

export default function TypeHeader() {
    const {filters} = useContext(FiltersStatus)!
    function firstLetterUp(s :string){
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : ""
    }
    return <h2 id="typeHeader">{firstLetterUp(filters.type)}</h2>
}