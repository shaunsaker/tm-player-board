import React, { ReactElement } from 'react'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

type QueryParamStoreProviderProps = { children: ReactElement }

export const QueryParamStoreProvider = ({
  children,
}: QueryParamStoreProviderProps): ReactElement => {
  return <QueryParamProvider adapter={ReactRouter6Adapter}>{children}</QueryParamProvider>
}
