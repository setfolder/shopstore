import {useContext, useMemo, useEffect} from "react"
import {FiltersStatus} from "@/shop/pages/Catalog/Catalog"
import ProductCard from "@/shop/components/ProductCard/ProductCard"
import useFetch from "@/hooks/useFetch"
import "./Products.css"

export default function Products({
        sortBy = "r",
        itemsByPage = 10,
        currentPage = 1,
        setPagesCounted = ()=>{},
        onResetPage = ()=>{}
        }
        :{
            sortBy? :string,
            itemsByPage? :number,
            currentPage? :number,
            setPagesCounted? :(v :number) => void,
            onResetPage? :() => void
        }
    ) {
    const { data: products, loadingStatus: loadStatus } = useFetch("/api/products")
    const {filters} = useContext(FiltersStatus)!

    const filteredAndSortedProducts = useMemo( ()=>{

        if (!Array.isArray(products)) return []    // protect from a render before products loading

        function norm(x :any){ return String(x).trim().toLowerCase() }

        const typeFilter = norm(filters.type)
        const gendersFilter = filters.genders.map(norm)
        const brandsFilter = filters.brands.map(norm)
        const colorsFilter = filters.colors.map(norm)
        const sizesFilter = filters.sizes.map(String)

        const filtered = products.filter( pos=>{
            if (pos.qTotal <= 0) return false
            if (typeFilter && norm(pos.type) !== typeFilter) return false
            if ( gendersFilter.length && !gendersFilter.includes(norm(pos.gender)) ) return false
            if ( brandsFilter.length && !brandsFilter.includes(norm(pos.posBrand)) ) return false
            if ( colorsFilter.length && !colorsFilter.includes(norm(pos.posColor)) ) return false
            if (sizesFilter.length) {
                const posSizes = pos.posSizes.map(String)
                if (  !sizesFilter.some( s=>posSizes.includes(s) )  ) return false
              }
            return true
        })

        // relevance - is already sorted
        if (sortBy === "r") return filtered

        const sorted = [...filtered].sort( (a, b)=>{
            const pa = Number(a.posSum)
            const pb = Number(b.posSum)
            // if the price is not a number
            if (!Number.isFinite(pa) && !Number.isFinite(pb)) return 0
            if (!Number.isFinite(pa)) return 1
            if (!Number.isFinite(pb)) return -1
            return sortBy === "l" ? pa - pb : pb - pa    // l: prices up, h: prices down
        })
        return sorted

    }, [products, filters, sortBy])

    const safeItems = Math.max( 1, Number(itemsByPage) || 1 )
    const pagesCount = Math.max( 1, Math.ceil(filteredAndSortedProducts.length / safeItems) )

    const safePage = Math.min( Math.max(1, Number(currentPage) || 1), pagesCount )
    const start = (safePage - 1) * safeItems
    const pageItems = filteredAndSortedProducts.slice( start, start + safeItems )
    
    useEffect( ()=>{
        setPagesCounted(pagesCount)
    }, [pagesCount])

    useEffect( ()=>{
        onResetPage()
    }, [filters, sortBy])

    return (
    <>
        {loadStatus === "loading" && <div>Loading products data...</div>}
        {loadStatus === "error" && <div>Something went wrong when loading.</div>}
        {loadStatus === "empty" && <div>Error: No products data</div>}
        {loadStatus === "success" &&
            <div className="products">
                { pageItems.map( pos => (
                    <ProductCard
                        key={pos.id}
                        pID={pos.id}
                        pPic={ pos.nails[0] }
                        pName={pos.posName}
                        pNote={pos.pdDesc}
                        pSum={(pos.posSum).toFixed(2)}
                    />
                ))}
            </div>
        }
    </>
    )

}
