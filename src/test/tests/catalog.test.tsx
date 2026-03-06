import {render, screen} from '@testing-library/react'
import {makeTestServer, type TestProduct} from '@/test/mirageTestServer'
import {renderAppAt} from '@/test/testUtils'

describe('Catalog', ()=>{

    const products: TestProduct[] = [{
        id: '1',
        nails: ['01-1.png'],
        posSizes: ['M'],
        posName: 'T-Shirt',
        posBrand: 'Acme',
        posSum: 100,
        posColor: 'black',
        pdDesc: 'Nice cotton t-shirt',
        qTotal: 10,
        type: 'clothes',
        gender: 'unisex'
    }]

    test('shows products from API', async ()=>{

        const server = makeTestServer(products)
        render(renderAppAt('/'))

        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()

        server.shutdown()

    })

    test('shows loading state while products are fetching', async  ()=>{

        const server = makeTestServer( products, {timing: 200} )
        render( renderAppAt('/') )

        expect( screen.getByText('Loading products data...') ).toBeInTheDocument()
        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()

        server.shutdown()

    })

    test('shows error state when API fails', async  ()=>{

        const server = makeTestServer( products, {failProducts: true} )
        render(renderAppAt('/'))

        expect(  await screen.findByText('Something went wrong when loading.')  ).toBeInTheDocument()

        server.shutdown()

    })

})
