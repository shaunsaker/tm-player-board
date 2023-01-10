import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'

import { TestWrapper } from './TestWrapper'

const customRender = (
  element: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> => render(element, { wrapper: TestWrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { userEvent }
