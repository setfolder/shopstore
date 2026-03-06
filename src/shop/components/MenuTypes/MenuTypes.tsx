import {useContext, useEffect} from "react"
import { Link } from 'react-router-dom'
import {FiltersStatus} from '@/shop/pages/Catalog/Catalog'
import useFetch from "@/hooks/useFetch"
import './MenuTypes.css'

export default function MenuTypes() {
    const {filters, setFilters} = useContext(FiltersStatus)!
    const { data: prodTypes, loadingStatus: loadStatus } = useFetch<Record<string, string>>("/api/prodTypes")
    function firstLetterUp(s :string){
        return s.charAt(0).toUpperCase()+s.slice(1)
    }
    useEffect( ()=>{
        if (loadStatus === "success" && prodTypes && !filters.type) {
            let defaultType = Object.values(prodTypes)[0]
            setFilters( prev=>({...prev, type: defaultType}) )
        }
    }, [loadStatus, prodTypes])
    return (
        <nav className='MenuTypes'>
            {loadStatus === "loading" && <div>Loading MenuTypes...</div>}
            {loadStatus === "error" && <div>Error when MenuTypes loading</div>}
            {loadStatus === "empty" && <div>Error: No MenuTypes</div>}
            {loadStatus === "success" && prodTypes &&
                Object.values(prodTypes).map( pType=>(
                    <Link
                        to={"/?type="+pType}
                        key={pType}
                        className={ filters.type===pType ? "navActive" : "" }
                        onClick={ ()=>setFilters( prev=>({...prev, type: pType}) ) }
                    >
                    { firstLetterUp(pType) }
                    </Link>
                ))
            }
        </nav>
    )
}