import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {makeTestServer, type TestProduct} from '@/test/mirageTestServer'
import {renderAppAt} from '@/test/testUtils'

describe('Cart', ()=>{

    let server: any

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

    beforeEach( ()=>{
        server = makeTestServer(products)
        localStorage.setItem('loggedIn', 'true')
        localStorage.setItem(  'cart', JSON.stringify([['1-M', 'M', 1]])  )
        localStorage.setItem( 'shippings', JSON.stringify([]) )
    })

    afterEach( ()=>server.shutdown() )

    test('shows content and allows deleting a position', async ()=>{

        const user = userEvent.setup()
        render(renderAppAt('/cart'))

        expect( await screen.findByText('Shopping Cart') ).toBeInTheDocument()
        expect( screen.getByText('T-Shirt') ).toBeInTheDocument()

        expect(  screen.getAllByText( /Subtotal\s*\(\s*1\s*items\s*\):/i )  ).toHaveLength(2)
        expect(  screen.getAllByText('$100.00')  ).toHaveLength(2)

        await user.click(  screen.getByRole('button', {name: /delete/i})  )

        await waitFor( ()=>{
            expect( screen.queryByText('T-Shirt') ).not.toBeInTheDocument()
        })

        expect(  await screen.findAllByText(/Subtotal\s*\(\s*0\s*items\s*\):/i)  ).toHaveLength(2)
        expect(screen.getAllByText('$0.00')).toHaveLength(2)

    })

})
