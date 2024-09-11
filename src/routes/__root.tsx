import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ConfigProvider, Spin } from 'antd'
import { Suspense } from 'react'

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: () => <Notfound />,
})

function Root() {
  useTilg()

  return (
    <ConfigProvider>
      <Suspense
        fallback={
          <div className="h-100vh flex-center text-5">
            <Spin />
          </div>
        }
      >
        <Outlet />
      </Suspense>

      <TanStackRouterDevtools position="bottom-right" />
    </ConfigProvider>
  )
}

function Notfound() {
  return <div>404</div>
}
