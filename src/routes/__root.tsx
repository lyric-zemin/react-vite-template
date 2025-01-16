import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ConfigProvider } from 'antd'
import { Leva } from 'leva'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  useTilg()

  return (
    <ConfigProvider theme={{ hashed: false }}>
      <Outlet />

      <Leva hidden={!isDev} />
      {isDev && <TanStackRouterDevtools position="bottom-right" />}
    </ConfigProvider>
  )
}
