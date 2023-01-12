import React, { ReactElement } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { Error } from './pages/error/Error'
import { Game } from './pages/game/Game'
import { Home } from './pages/home/Home'
import { QueryParamStoreProvider } from './store/QueryParamStoreProvider'

export enum RoutePaths {
  home = '/',
  game = '/game',
}

// TODO: SS is there a way that we can render a catch all error route instead of declaring it with each route
const errorElement = <Error />

export const Router = (): ReactElement => {
  return (
    <HashRouter>
      <QueryParamStoreProvider>
        <Routes>
          <Route path={RoutePaths.home} element={<Home />} errorElement={errorElement} />

          <Route path={RoutePaths.game} element={<Game />} errorElement={errorElement} />
        </Routes>
      </QueryParamStoreProvider>
    </HashRouter>
  )
}
