import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import RedoIcon from '../../assets/icons/redo-icon.svg'
import RedoSound from '../../assets/sounds/redo.wav'
import { usePlaySound } from '../../hooks/usePlaySound'
import { Button } from '../button/Button'

export const RedoButton = (): ReactElement => {
  const playSound = usePlaySound(RedoSound)

  const onClick = useCallback(() => {
    history.forward()

    playSound()
  }, [playSound])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <RedoIcon />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
`
