import {render, screen} from '@testing-library/react'
import {makeTestServer, type TestProduct} from '@/test/mirageTestServer'
import {renderAppAt} from '@/test/testUtils'

describe('ProductPage', ()=>{

    let server: any

    beforeEach( ()=>{
        const products: TestProduct[] = [{
            id: '1',
            nails: ['01-1.png'],
            posSizes: ['M', 'L'],
            posName: 'T-Shirt',
            posBrand: 'Acme',
            posSum: 100,
            posColor: 'black',
            pdDesc: 'Nice cotton t-shirt',
            qTotal: 10
        }]
        server = makeTestServer(products)
    })

    afterEach( ()=>server.shutdown() )

    test('shows product details from API', async ()=>{
        render( renderAppAt('/product/1') )
        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()
        expect( screen.getByText(/Brand:\s*Acme/i) ).toBeInTheDocument()
        expect( screen.getByText('100.00') ).toBeInTheDocument()
        expect( screen.getByText('Nice cotton t-shirt') ).toBeInTheDocument()
    })

})
