import {useState, useContext} from "react"
import {MobFilStatus} from '@/shop/pages/Catalog/Catalog'
import {FiltersStatus} from '@/shop/pages/Catalog/Catalog'
import BtnClose from '@/shop/components/BtnClose/BtnClose'
import CheckItem from '@/shop/components/CheckItem/CheckItem'
import CheckColor from '@/shop/components/CheckColor/CheckColor'
import CheckSize from '@/shop/components/CheckSize/CheckSize'
import useFetch from "@/hooks/useFetch"
import './Aside.css'

interface Filters {
    type :string
    genders :("men" | "women" | "unisex")[]
    brands :string[]
    colors :string[]
    sizes :(string | number)[]
}

interface FiltersContextValue {
    filters :Filters
    setFilters :React.Dispatch<React.SetStateAction<Filters>>
}

export default function Aside() {
    const [showAllBrands, setShowAllBrands] = useState<boolean>(false)
    const {mobiFilter} = useContext(MobFilStatus) as {mobiFilter :boolean}
    const {filters, setFilters} = useContext(FiltersStatus) as FiltersContextValue
    const { data: prodBrands, loadingStatus: loadStatus } = useFetch<Record<string, string> | string[]>("/api/prodBrands")
    const { data: prodColors, loadingStatus: cLoadStatus } = useFetch<[string | number, string, string][]>("/api/prodColors")
    const { data: prodSizes, loadingStatus: sLoadStatus } = useFetch<(string | number)[]>("/api/prodSizes")
    const classes =  mobiFilter ? "aside on" : "aside"

    function toggle(
        item :string | number,
        items :keyof Pick<Filters, "genders" | "brands" | "colors" | "sizes">
        ) :void {
        setFilters( prev=>{
            const list = prev[items] as (string | number)[]
            const exists = list.includes(item)
            const nextList = exists ?  list.filter(x => x !== item)  :  [...list, item]
            return { ...prev, [items]:nextList } as Filters
        })
    }

    const numVisibleBrands = 5

    const allBrands :string[] =
        loadStatus === "success" && prodBrands ?
            Array.isArray(prodBrands) ?
                prodBrands :
                Object.values(prodBrands)
            : []

    const visibleBrands = showAllBrands ? allBrands : allBrands.slice(0, numVisibleBrands)

    return (
        <aside className={classes}>

            <BtnClose/>

            <h2>Gender</h2>
            <CheckItem
                id="men"
                content="Men"
                checked={ filters.genders.includes("men") }
                onChange={ ()=>toggle("men", "genders") }
            />
            <CheckItem
                id="women"
                content="Women"
                checked={ filters.genders.includes("women") }
                onChange={ ()=>toggle("women", "genders") }
            />
            <CheckItem
                id="unisex"
                content="Unisex"
                checked={ filters.genders.includes("unisex") }
                onChange={ ()=>toggle("unisex", "genders") }
            />

            <h2>Brand</h2>
            {loadStatus === "loading" && <div>Loading brands...</div>}
            {loadStatus === "error" && <div>Error when brands loading</div>}
            {loadStatus === "empty" && <div>Error: No brands data</div>}
            {loadStatus === "success" &&
                visibleBrands.map( pBrand => (
                    <CheckItem
                        key={pBrand.replace(/\s+/g, "")}
                        id={pBrand.replace(/\s+/g, "")}
                        content={pBrand}
                        checked={ filters.brands.includes(pBrand) }
                        onChange={ ()=>toggle(pBrand, "brands") }
                    />
                ))
            }
            {allBrands.length > numVisibleBrands && (
                <div  className="seeMore"  onClick={ ()=>setShowAllBrands(prev => !prev) } role="button" aria-expanded={showAllBrands} aria-label={showAllBrands ? "Hide brands" : "Show more brands"}>
                    <img src={ showAllBrands ? "pic/up.png" : "pic/down.png" } alt="v" aria-hidden="true" />
                    <span>{ showAllBrands ? "Hide" : "See more" }</span>
                </div>
            )}

            <h2>Color</h2>
            <div className="choice">
                {cLoadStatus === "loading" && <div>Loading colors...</div>}
                {cLoadStatus === "error" && <div>Error when colors loading</div>}
                {cLoadStatus === "empty" && <div>Error: No colors data</div>}
                {cLoadStatus === "success" && prodColors &&
                    prodColors.map( ([colorID, colorName, colorCode]) => (
                        <CheckColor
                            key={colorID}
                            id={colorID}
                            colorCode={colorCode}
                            checked={ filters.colors.includes(colorName) }
                            onChange={ ()=>toggle(colorName, "colors") }
                        />
                    ))
                }
            </div>

            <h2>Sizes</h2>
            <div className="choice">
                {sLoadStatus === "loading" && <div>Loading Sizes...</div>}
                {sLoadStatus === "error" && <div>Error when Sizes loading</div>}
                {sLoadStatus === "empty" && <div>Error: No Sizes data</div>}
                {sLoadStatus === "success" && prodSizes &&
                    prodSizes.map( size => (
                        <CheckSize
                            key={size}
                            id={String(size)}
                            size={size}
                            checked={ filters.sizes.includes(size) }
                            onChange={ ()=>toggle(size, "sizes") }
                        />
                    ))
                }
            </div>

        </aside>
    )
}