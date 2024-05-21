import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Resource } from '../../store/resources/models'
import { useResource } from '../../store/resources/useResource'
import { Input } from '../input/Input'
import { Typography } from '../typography/Typography'

type ResourceSummaryProps = Resource

export const ResourceSummary = ({
  id,
  name,
  color,
  iconComponent,
  stockpile,
  production,
}: ResourceSummaryProps): ReactElement => {
  const [resourceStockpile] = useResource(id, 'stockpile')
  const [resourceProduction] = useResource(id, 'production')

  return (
    <Container
      style={{
        borderColor: color,
      }}
    >
      <IconContainer style={{ backgroundColor: color }}>
        {iconComponent}

        <Typography kind="tiny">{name}</Typography>
      </IconContainer>

      {stockpile ? <StyledInput value={resourceStockpile} disabled /> : <Placeholder />}

      {production ? <StyledInput value={resourceProduction} disabled /> : <Placeholder />}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${({ theme }) => theme.colors.white20};
  display: flex;
  align-items: center;
`

const IconContainer = styled.div`
  flex: 1;
  width: ${({ theme }) => theme.elements.inputs}px;
  height: ${({ theme }) => theme.elements.inputs}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs}px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white100};
`

const StyledInput = styled(Input)`
  flex: 1;
`

const Placeholder = styled.div`
  flex: 1;
`
