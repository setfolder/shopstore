import {createServer, Response} from 'miragejs'

export type TestProduct = {
    id :string
    nails :string[]
    posSizes :(string | number)[]
    posName :string
    posBrand :string
    posSum :number
    posColor :string
    pdDesc :string
    qTotal :number
    type? :string
    gender? :string
}

type MakeServerOptions = {
    timing? :number
    failProducts? :boolean
    failProductById? :boolean
}

/*
  Minimal Mirage server for tests.
  Contract matches useFetch():
    - GET /api/products -> array
    - GET /api/products/:id -> object | null
*/

export function makeTestServer(products :TestProduct[], options :MakeServerOptions = {}) {
    return createServer({
        environment: 'test',
        routes() {
            if (typeof options.timing === 'number') {this.timing = options.timing}
            this.get('/api/products', ()=>{
                if (options.failProducts) return new Response( 500, {}, {message: 'fail'} )
                return products
            })
            this.get('/api/products/:id', (_schema, request)=>{
                if (options.failProductById) { return new Response(500, {}, {message: 'fail'}) }
                const id = String(request.params.id)
                return products.find( p => String(p.id) === id ) ?? null
            })
        }
    })
}
