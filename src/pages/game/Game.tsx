import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { FooterBar } from '../../components/footerBar/FooterBar'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { ProductionPhaseButton } from '../../components/productionPhaseButton/ProductionPhaseButton'
import { RedoButton } from '../../components/redoButton/RedoButton'
import { ResourceCard } from '../../components/resourceCard/ResourceCard'
import { SoundSettingButton } from '../../components/soundSettingButton/SoundSettingButton'
import { Spacer } from '../../components/spacer/Spacer'
import { UndoButton } from '../../components/undoButton/UndoButton'
import { resources } from '../../store/resources/constants'
import { objectToArray } from '../../utils/objectToArray'

export const Game = (): ReactElement => {
  return (
    <Page>
      <HeaderBar>
        <SoundSettingButton />

        <Spacer size="sm" />

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
          <ProductionPhaseButton />
        </ButtonsContainer>
      </FooterBar>
    </Page>
  )
}

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

const ButtonsContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm}px;
`
