import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import UndoIcon from '../../assets/icons/undo-icon.svg'
import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

export const UndoButton = (): ReactElement => {
  const onClick = useCallback(() => {
    history.back()
  }, [])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <UndoIcon />

      <Typography kind="tiny">Undo</Typography>
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
  gap: ${({ theme }) => theme.spacing.xs}px;
`
