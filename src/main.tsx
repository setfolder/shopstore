import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import type {Server} from 'miragejs/server'
import type {Registry, AnyModels, AnyFactories} from 'miragejs/-types'
import {MakeServer} from '@/server/server.ts'
import { RouterProvider } from "react-router-dom"
import { router } from "@/routing/router"

let server: Server<Registry<AnyModels, AnyFactories>>

const useMirage = import.meta.env.DEV || import.meta.env.VITE_USE_MIRAGE === 'true'
if (useMirage) {
    server = MakeServer()
    if (import.meta.hot) {
        import.meta.hot.accept('./server/server.ts', ()=>{
            server.shutdown()
            server = MakeServer()
        })
    }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
)
