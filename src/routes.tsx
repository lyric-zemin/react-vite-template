import type { RouteObject } from 'react-router-dom'

const Index = lazy(() => import('~/pages/index'))
const Notfound = lazy(() => import('~/pages/404'))

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: <Index />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]

export default routes
