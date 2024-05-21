import React from 'react'
import styled from 'styled-components'

import { Page } from '../../../components/page/Page'
import { ProductionPhaseButton } from '../../../components/productionPhaseButton/ProductionPhaseButton'
import { RedoButton } from '../../../components/redoButton/RedoButton'
import { ResourceCard } from '../../../components/resourceCard/ResourceCard'
import { UndoButton } from '../../../components/undoButton/UndoButton'
import { resources } from '../../../store/resources/constants'
import { objectToArray } from '../../../utils/objectToArray/objectToArray'

export const ActionsTab = () => {
  return (
    <>
      <ButtonsContainer>
        <UndoButton />

        <RedoButton />

        <ProductionPhaseButton />
      </ButtonsContainer>

      <Page.Content>
        <ResourcesContainer>
          {objectToArray(resources).map(resource => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </ResourcesContainer>
      </Page.Content>
    </>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.black100};
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`

const ResourcesContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.sm}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
