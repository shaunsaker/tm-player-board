import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import UndoIcon from '../../assets/icons/undo-icon.svg'
import { Button } from '../button/Button'

export const UndoButton = (): ReactElement => {
  const onClick = useCallback(() => {
    history.back()
  }, [])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <UndoIcon />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
`
