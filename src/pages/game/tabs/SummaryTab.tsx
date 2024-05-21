import React from 'react'
import styled from 'styled-components'

import { Page } from '../../../components/page/Page'
import { ResourceSummary } from '../../../components/resourceSummary/ResourceSummary'
import { Typography } from '../../../components/typography/Typography'
import { resources } from '../../../store/resources/constants'
import { objectToArray } from '../../../utils/objectToArray/objectToArray'

export const SummaryTab = () => {
  return (
    <>
      <Page.Content>
        <ResourcesContainer>
          <HeadersContainer>
            <StyledHeader kind="small">Resource</StyledHeader>
            <StyledHeader kind="small">Stockpile</StyledHeader>
            <StyledHeader kind="small">Production</StyledHeader>
          </HeadersContainer>

          {objectToArray(resources).map(resource => (
            <ResourceSummary key={resource.id} {...resource} />
          ))}
        </ResourcesContainer>
      </Page.Content>
    </>
  )
}

const HeadersContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white20};
  padding: ${({ theme }) => theme.spacing.sm}px;
`

const StyledHeader = styled(Typography)`
  flex: 1;
`

const ResourcesContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm}px;
`
