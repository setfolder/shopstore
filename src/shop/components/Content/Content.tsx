import {useEffect, useState} from "react"
import Top from "@/shop/components/Top/Top"
import Products from "@/shop/components/Products/Products"
import Pager from "@/shop/components/Pager/Pager"
import "./Content.css"

export default function Content() {

    const [sortBy, setSortBy] = useState("r")

    const itemsByPage = 10
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesCounted, setPagesCounted] = useState(1)
    // after filtering/sorting page should still be in range
    useEffect( ()=>{
        setCurrentPage(  p=> Math.min( Math.max(1, p), pagesCounted )  )
    }, [pagesCounted])

    return (
        <div id="content">
            <Top sortBy={sortBy} setSortBy={setSortBy} />
            <Products
                sortBy={sortBy}
                itemsByPage={itemsByPage}
                currentPage={currentPage}
                setPagesCounted={setPagesCounted}
                onResetPage={ ()=>setCurrentPage(1) }
            />
            <Pager
                currentPage={currentPage}
                pagesCounted={pagesCounted}
                onPrev={  ()=>setCurrentPage( p=>Math.max(1, p - 1) )  }
                onNext={  ()=>setCurrentPage( p=>Math.min(pagesCounted, p + 1) )  }
            />
        </div>
    )
}
