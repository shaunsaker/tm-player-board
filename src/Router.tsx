import React, { ReactElement } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Error } from './pages/error/Error'
import { Home } from './pages/home/Home'

export enum Routes {
  home = '/',
}

// TODO: SS is there a way that we can render a catch all error route instead of declaring it with each route
const errorElement = <Error />

const router = createHashRouter([
  {
    path: Routes.home,
    element: <Home />,
    errorElement,
  },
])

export const Router = (): ReactElement => {
  return <RouterProvider router={router} />
}
