import { createRouter, RouterProvider } from '@tanstack/react-router'
import { Spin } from 'antd'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

const router = createRouter({
  routeTree,

  defaultViewTransition: true,
  defaultNotFoundComponent: () => <div>404</div>,
  defaultPendingComponent: () => (
    <div className="h-100vh flex-center text-5">
      <Spin />
    </div>
  ),
})

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
