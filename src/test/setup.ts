import '@testing-library/jest-dom'

import { vi } from 'vitest'

import { SpaceTravelMock } from './SpaceTravelMock'

vi.mock('space-travel', async () => {
  return { default: SpaceTravelMock }
})
