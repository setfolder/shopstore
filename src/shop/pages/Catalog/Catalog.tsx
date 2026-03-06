import {useState, useEffect, createContext} from 'react'
import { useSearchParams } from 'react-router-dom'
import Aside from '@/shop/components/Aside/Aside'
import Content from '@/shop/components/Content/Content'
import MenuTypes from '@/shop/components/MenuTypes/MenuTypes'
import './Catalog.css'

type MobFilContextValue = {
    mobiFilter :boolean
    setMobiFilter :React.Dispatch<React.SetStateAction<boolean>>
}
type Filters = {
    type :string
    genders :string[]
    brands :string[]
    colors :string[]
    sizes :string[]
}
type FiltersContextValue = {
    filters :Filters
    setFilters :React.Dispatch<React.SetStateAction<Filters>>
}

export const MobFilStatus = createContext<MobFilContextValue | null>(null)
export const FiltersStatus = createContext<FiltersContextValue | null>(null)

export default function Catalog() {
    const [searchParams] = useSearchParams()
    const [mobiFilter, setMobiFilter] = useState(false)
    const [filters, setFilters] = useState<Filters>( {type:"", genders:[], brands:[], colors:[], sizes:[]} )

    useEffect( ()=>{
        const typeFromUrl = searchParams.get('type')
        if(typeFromUrl) {  setFilters( prev=>({...prev, type: typeFromUrl}) )  }
    }, [searchParams] )

    return (
        <MobFilStatus.Provider value={{mobiFilter, setMobiFilter}}>
        <FiltersStatus.Provider value={{filters, setFilters}}>
            <MenuTypes />
            <main className='catalogMain'>
                <Aside />
                <Content />
            </main>
        </FiltersStatus.Provider>
        </MobFilStatus.Provider>
    )
}