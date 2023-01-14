import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import UndoIcon from '../../assets/icons/undo-icon.svg'
import UndoSound from '../../assets/sounds/undo.wav'
import { usePlaySound } from '../../hooks/usePlaySound'
import { Button } from '../button/Button'

export const UndoButton = (): ReactElement => {
  const playSound = usePlaySound(UndoSound)

  const onClick = useCallback(() => {
    history.back()

    playSound()
  }, [playSound])

  return (
    <StyledButton type="button" kind="secondary" onClick={onClick}>
      <UndoIcon />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: auto;
`
