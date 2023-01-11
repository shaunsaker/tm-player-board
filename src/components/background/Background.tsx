import React, { ReactElement, useLayoutEffect, useRef } from 'react'
import SpaceTravel from 'space-travel'
import styled from 'styled-components'

import { theme } from '../../theme/theme'

export const Background = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<any>() // eslint-disable-line

  useLayoutEffect(() => {
    // on mount, create and start the space travel animation
    sceneRef.current = new SpaceTravel({
      canvas: canvasRef.current,
      backgroundColor: theme.colors.black100,
    })

    sceneRef.current.start()
  }, [])

  return <Container ref={canvasRef} />
}

const Container = styled.canvas`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
