import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from './routeTree.gen'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
