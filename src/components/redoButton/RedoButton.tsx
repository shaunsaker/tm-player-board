import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import RedoIcon from '../../assets/redo-icon.svg'
import { Button } from '../button/Button'

export const RedoButton = (): ReactElement => {
  const onClick = useCallback(() => {
    history.forward()
  }, [])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <RedoIcon />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
`
