import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {makeTestServer, type TestProduct} from '@/test/mirageTestServer'
import {renderAppAt} from '@/test/testUtils'

describe('Add to cart + login', ()=>{

    let server: any

    beforeEach( ()=>{
        localStorage.removeItem('loggedIn')
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

    test('opens login modal when user is not logged in', async ()=>{

        const user = userEvent.setup()
        render( renderAppAt('/product/1') )

        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()

        await user.click(  screen.getByRole('button', {name: /add to cart/i})  )

        expect(  screen.getByRole('dialog', {name: /modal dialog/i})  ).toBeInTheDocument()
        expect( screen.getByText(/sign in/i) ).toBeInTheDocument()

    })

    test('login form sets loggedIn=true and closes modal', async ()=>{

        const user = userEvent.setup()
        render( renderAppAt('/product/1') )

        expect( await screen.findByText('T-Shirt') ).toBeInTheDocument()

        await user.click(  screen.getByRole('button', {name: /add to cart/i})  )

        const email = screen.getByLabelText(/email/i)
        const pass = screen.getByLabelText(/password/i)

        await user.type(email, 'test@example.com')
        await user.type(pass, '123456')

        await user.click(  screen.getByRole('button', {name: /continue/i})  )

        await waitFor( ()=>{
            expect(localStorage.getItem('loggedIn')).toBe('true')
        })

        await waitFor( ()=>{
            expect(screen.queryByRole('dialog', { name: /modal dialog/i })).not.toBeInTheDocument()
        })
    
    })

})
