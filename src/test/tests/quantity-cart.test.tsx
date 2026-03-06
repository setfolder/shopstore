import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { makeTestServer, type TestProduct } from '@/test/mirageTestServer'
import { renderAppAt } from '@/test/testUtils'

describe('Quantity + cart totals', ()=>{

    let server: any

    beforeEach( ()=>{

        localStorage.setItem('loggedIn', 'true')
        localStorage.setItem( 'cart', JSON.stringify([]) )
        localStorage.setItem( 'shippings', JSON.stringify([]) )

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
    
    })

    afterEach( ()=>server.shutdown() )

    test('adds selected quantity to cart and updates subtotal', async  ()=>{

        const user = userEvent.setup()
        render(renderAppAt('/product/1'))

        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()

        const inc = screen.getByRole('button', {name: 'Increase quantity'})
        await user.click(inc)
        await user.click(inc)

        await user.click(  screen.getByRole('button', {name: /add to cart/i})  )

        await user.click(  screen.getByRole('button', {name: 'Open cart'})  )

        expect(  await screen.findByText('Shopping Cart')  ).toBeInTheDocument()
        expect(  screen.getByText(/Amount:\s*3/i)  ).toBeInTheDocument()

        expect(  screen.getAllByText(/Subtotal\s*\(\s*3\s*items\s*\):/i)  ).toHaveLength(2)
        expect(  screen.getAllByText('$100.00')  ).toHaveLength(2)
    
    })

})
