import {render, screen} from '@testing-library/react'
import {makeTestServer, type TestProduct} from '@/test/mirageTestServer'
import {renderAppAt} from '@/test/testUtils'

describe('RequireAuth',  ()=>{

    let server: any

    beforeEach( ()=>{
        const products: TestProduct[] = [{
            id: '1',
            nails: ['01-1.png'],
            posSizes: ['M'],
            posName: 'T-Shirt',
            posBrand: 'Acme',
            posSum: 100,
            posColor: 'black',
            pdDesc: 'Nice cotton t-shirt',
            qTotal: 10
        }]
        server = makeTestServer(products)
        localStorage.removeItem('loggedIn')
    })

    afterEach( ()=>server.shutdown() )

    test('redirects to homepage when user is not logged in', async  ()=>{
        render( renderAppAt('/cart') )
        expect(  await screen.findByText('T-Shirt')  ).toBeInTheDocument()
    })

})
