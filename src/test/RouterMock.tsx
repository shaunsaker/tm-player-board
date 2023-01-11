import React, { ReactElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

type RouterMockProps = { children: ReactElement }

export const RouterMock = ({ children }: RouterMockProps): ReactElement => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  )
}
