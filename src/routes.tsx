import { type RouteObject } from 'react-router-dom'

const Index = lazy(() => import('~/pages/index'))
const Notfound = lazy(() => import('~/pages/404'))
const Three = lazy(() => import('~/pages/three'))

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: <Index />,
  },
  {
    path: '/three',
    element: <Three />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]

export default routes
