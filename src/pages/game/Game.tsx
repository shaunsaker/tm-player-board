import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Button } from '../../components/button/Button'
import { FooterBar } from '../../components/footerBar/FooterBar'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { RedoButton } from '../../components/redoButton/RedoButton'
import { ResourceCard } from '../../components/resourceCard/ResourceCard'
import { Spacer } from '../../components/spacer/Spacer'
import { UndoButton } from '../../components/undoButton/UndoButton'
import { resources } from '../../store/resources/constants'
import { useProductionPhase } from '../../store/resources/useProductionPhase'
import { objectToArray } from '../../utils/objectToArray/objectToArray'

export const Game = (): ReactElement => {
  const initiateProductionPhase = useProductionPhase()

  return (
    <Page>
      <HeaderBar>
        <UndoButton />

        <Spacer size="sm" />

        <RedoButton />
      </HeaderBar>

      <Page.Content>
        <ResourcesContainer>
          {objectToArray(resources).map(resource => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </ResourcesContainer>
      </Page.Content>

      <FooterBar>
        <ButtonsContainer>
          <Button type="button" kind="primary" onClick={initiateProductionPhase}>
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
