import React from 'react'

import { render, screen } from '../../test/utils'
import { Home } from './Home'

describe('Home', () => {
  it('displays greeting', async () => {
    render(<Home />)

    expect(
      screen.getByText('Welcome to the unofficial Terraforming Mars digital Player Board 👋🏻'),
    ).toBeDefined()
  })
})
