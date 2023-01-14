import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import { useLongPress } from '../../hooks/useLongPress'
import { useProductionPhase } from '../../store/resources/useProductionPhase'
import { Button } from '../button/Button'

const LONG_PRESS_DURATION = 1000

export const ProductionPhaseButton = (): ReactElement => {
  const initiateProductionPhase = useProductionPhase()

  const onLongPress = useCallback(() => {
    initiateProductionPhase()
  }, [initiateProductionPhase])

  const { eventHandlers, isPressing } = useLongPress(onLongPress, LONG_PRESS_DURATION)

  return (
    <Button type="button" kind="primary" {...eventHandlers}>
      <PressAnimation data-is-pressing={isPressing} />
      PRODUCTION PHASE
    </Button>
  )
}

const PressAnimation = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.white20};
  transform: translateX(-100%);
  transition: ${({ theme }) => theme.transition.default}s;
  transition-duration: ${LONG_PRESS_DURATION}ms;

  &[data-is-pressing='true'] {
    transform: translateX(0);
  }
`
