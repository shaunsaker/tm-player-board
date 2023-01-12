import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import RedoIcon from '../../assets/redo-icon.svg'
import UndoIcon from '../../assets/undo-icon.svg'
import { Button } from '../../components/button/Button'
import { FooterBar } from '../../components/footerBar/FooterBar'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { ResourceCard } from '../../components/resourceCard/ResourceCard'
import { resources } from '../../store/resources/constants'
import { useProductionPhase } from '../../store/resources/useProductionPhase'
import { objectToArray } from '../../utils/objectToArray/objectToArray'

export const Game = (): ReactElement => {
  const initiateProductionPhase = useProductionPhase()

  const onUndoClick = useCallback(() => {
    history.back()
  }, [])

  const onRedoClick = useCallback(() => {
    history.forward()
  }, [])

  const onProductionPhaseClick = useCallback(() => {
    initiateProductionPhase()
  }, [initiateProductionPhase])

  return (
    <Page>
      <HeaderBar />

      <Page.Content>
        <ResourcesContainer>
          {objectToArray(resources).map(resource => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </ResourcesContainer>
      </Page.Content>

      <FooterBar>
        <ButtonsContainer>
          <UndoRedoButton type="button" kind="secondary" onClick={onUndoClick}>
            <UndoIcon />
          </UndoRedoButton>

          <UndoRedoButton type="button" kind="secondary" onClick={onRedoClick}>
            <RedoIcon />
          </UndoRedoButton>

          <Button type="button" kind="primary" onClick={onProductionPhaseClick}>
            PRODUCTION PHASE
          </Button>
        </ButtonsContainer>
      </FooterBar>
    </Page>
  )
}

const ResourcesContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSm}px) {
    grid-template-columns: 1fr;
  }
`

const ButtonsContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm}px;
`

const UndoRedoButton = styled(Button)`
  width: auto;
`
