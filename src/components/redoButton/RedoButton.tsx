import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import RedoIcon from '../../assets/icons/redo-icon.svg'
import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

export const RedoButton = (): ReactElement => {
  const onClick = useCallback(() => {
    history.forward()
  }, [])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <RedoIcon />

      <Typography kind="tiny">Redo</Typography>
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
  gap: ${({ theme }) => theme.spacing.xs}px;
`
