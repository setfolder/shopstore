import TypeHeader from '@/shop/components/TypeHeader/TypeHeader'
import FilterButton from '@/shop/components/FilterButton/FilterButton'
import Sorting from '@/shop/components/Sorting/Sorting'
import './Top.css'

export default function Top( {sortBy, setSortBy} :{sortBy :string, setSortBy :(v :string)=>void} ) {
    return (
        <div id="top">
            <TypeHeader/>
            <FilterButton />
            <Sorting value={sortBy} setSortBy={setSortBy} />
        </div>
    )
}