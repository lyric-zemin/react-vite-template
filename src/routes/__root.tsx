import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ConfigProvider } from 'antd'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  useTilg()

  return (
    <ConfigProvider theme={{ hashed: false }}>
      <Outlet />

      <TanStackRouterDevtools position="bottom-right" />
    </ConfigProvider>
  )
}
