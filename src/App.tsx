import { ConfigProvider, Spin } from 'antd'
import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function App() {
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
      <ScrollRestoration />
    </ConfigProvider>
  )
}
