import {createServer} from "miragejs"
import siteData from "./siteData.ts"
import userData from "./userData.ts"
import products from "./products.ts"
import prodTypes from "./prodTypes.ts"
import prodBrands from "./prodBrands.ts"
import prodColors from "./prodColors.ts"
import prodSizes from "./prodSizes.ts"

export function MakeServer() {
    return createServer({
        routes() {
            this.get("/api/sitedata", ()=>siteData)
            this.get("/api/userdata", ()=>userData)
            this.get("/api/products", ()=>products)
            this.get("/api/prodTypes", ()=>prodTypes)
            this.get("/api/prodBrands", ()=>prodBrands)
            this.get("/api/prodColors", ()=>prodColors)
            this.get("/api/prodSizes", ()=>prodSizes)
            this.get("/api/products/:id", (_schema, request)=>{
                let id = request.params.id
                return products.find( item => item.id === String(id) ) || null
            })
        }
    })
}