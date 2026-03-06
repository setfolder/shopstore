import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import ProductPhoto from "@/shop/components/ProductPhoto/ProductPhoto"
import Thumbnails from "@/shop/components/Thumbnails/Thumbnails"
import ImagePreview from "@/shop/components/ImagePreview/ImagePreview"
import Quantity from "@/shop/components/Quantity/Quantity"
import BtnAddToCart from "@/shop/components/BtnAddToCart/BtnAddToCart"
import SizeSelector from "@/shop/components/SizeSelector/SizeSelector"
import useFetch from "@/hooks/useFetch"
import "./ProductPage.css"

interface ProductData {
    id :string | number
    nails :string[]
    posSizes? :(string | number)[]
    posName :string
    posBrand :string
    posSum :number
    posColor :string
    pdDesc :string
    qTotal :number
}

export default function ProductPage() {

    const [nowPhoto, setNowPhoto] = useState<string | null>(null)
    const [previewSrc, setPreviewSrc] = useState<string | null>(null)
    const [amount, setAmount] = useState<number>(1)
    const [selectedSize, setSelectedSize] = useState<string>("")
    const {id} = useParams()
    const { data: posData, loadingStatus: loadStatus } = useFetch<ProductData>(
        id ? `/api/products/${id}` : null
    )

    useEffect( ()=>{
        if (loadStatus === "success" && posData) {
                setNowPhoto(posData.nails?.[0] ?? null)
                const firstSize = posData.posSizes?.[0]
                if (firstSize != null) setSelectedSize(String(firstSize))
        }
    }, [loadStatus, posData])

    if (loadStatus === "loading") return <div>Loading product data...</div>
    if (loadStatus === "error") return <div>Error while getting product data</div>
    if (loadStatus === "empty") return <div>Product data is empty or not found</div>
    if (!posData) return <div>Product data is empty or not found</div>

    return (
        <main className="PosPageMain">
            <Thumbnails sources={posData.nails} nowPhoto={nowPhoto} func={setNowPhoto} />
            <ProductPhoto src={nowPhoto ?? ""} func={setPreviewSrc} />
            {previewSrc && <ImagePreview src={previewSrc} fnClose={() => setPreviewSrc(null)} />}

            <div className="description">
                <h2 className="posName">{posData.posName}</h2>
                <div className="posBrand">Brand: {posData.posBrand}</div>

                <div className="posPrice">
                    <span className="posSign">$</span>
                    <span className="posSum">{posData.posSum.toFixed(2)}</span>
                </div>

                <div className="posColor">
                    Color:
                    <span className="bigCircle" style={{ backgroundColor: posData.posColor }} />
                </div>

                <SizeSelector sizes={posData.posSizes ?? []} value={selectedSize} onChange={setSelectedSize}/>

                <div className="posDetails">
                    <div className="pdHeader">Product details:</div>
                    <div className="pdDesc">{posData.pdDesc}</div>
                </div>

                <div className="posSelect">
                    <Quantity totalAmount={posData.qTotal} amount={amount} setAmount={setAmount} />
                    <BtnAddToCart id={posData.id} size={selectedSize} amount={amount} type="big" />
                </div>
            </div> {/* description */}
        </main>
    )

}