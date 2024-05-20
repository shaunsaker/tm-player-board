import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useStarsAnimationEnabled } from '../../hooks/useStarsAnimationEnabled'
import { Typography } from '../typography/Typography'

export const StarAnimationCheckbox = (): ReactElement => {
  const [isStarAnimationEnabled, setIsStarAnimationEnabled] = useStarsAnimationEnabled()

  return (
    <Container>
      <input
        id="checkbox"
        type="checkbox"
        checked={isStarAnimationEnabled}
        onChange={event => setIsStarAnimationEnabled(event.target.checked)}
      />

      <Typography as="label" htmlFor="checkbox" kind="small" style={{ userSelect: 'none' }}>
        Stars Animation
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
  cursor: pointer;
`
