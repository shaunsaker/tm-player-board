import React, { ReactElement, useEffect, useRef } from 'react'
import SpaceTravel from 'space-travel'
import styled from 'styled-components'

import { useStarsAnimationEnabled } from '../../hooks/useStarsAnimationEnabled'
import { theme } from '../../theme/theme'

export const Background = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<any>() // eslint-disable-line

  const [isStarAnimationEnabled] = useStarsAnimationEnabled()

  useEffect(() => {
    // on mount, create the space travel scene
    sceneRef.current = new SpaceTravel({
      canvas: canvasRef.current,
      backgroundColor: theme.colors.black100,
    })

    // if the star animation is enabled, start the animation
    if (isStarAnimationEnabled) {
      sceneRef.current.start()
    }
  }, [isStarAnimationEnabled])

  return <Container ref={canvasRef} />
}

const Container = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`
