import '@testing-library/jest-dom'

beforeAll( ()=>{
  jest.spyOn(console, 'log').mockImplementation( ()=>{} )
} )

afterAll( ()=>{
  ;(console.log as unknown as jest.Mock).mockRestore?.()
} )
