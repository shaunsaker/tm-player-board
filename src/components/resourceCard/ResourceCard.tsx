import React, { ChangeEvent, ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import { Resource } from '../../store/resources/models'
import { useResource } from '../../store/resources/useResource'
import { NumberInput } from '../numberInput/NumberInput'
import { Spacer } from '../spacer/Spacer'

type ResourceCardProps = Resource

export const ResourceCard = ({
  id,
  color,
  iconComponent,
  stockpile,
  production,
}: ResourceCardProps): ReactElement => {
  const [resourceStockpile, setResourceStockpile] = useResource(id, 'stockpile')
  const [resourceProduction, setResourceProduction] = useResource(id, 'production')

  const onChangeResourceStockpile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setResourceStockpile(parseInt(event.target.value))
    },
    [setResourceStockpile],
  )

  const onChangeResourceProduction = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setResourceProduction(parseInt(event.target.value))
    },
    [setResourceProduction],
  )

  return (
    <Container>
      <IconContainer style={{ backgroundColor: color }}>{iconComponent}</IconContainer>

      {stockpile && (
        <>
          <Spacer size="sm" />

          <NumberInput
            min={Number(stockpile.min)}
            value={resourceStockpile}
            onChange={onChangeResourceStockpile}
          />
        </>
      )}

      {production && (
        <>
          <Spacer size="sm" />

          <NumberInput
            min={Number(production.min)}
            value={resourceProduction}
            onChange={onChangeResourceProduction}
            style={{ borderColor: color }}
          />
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${({ theme }) => theme.colors.white20};
  padding: ${({ theme }) => theme.spacing.sm}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.div`
  width: ${({ theme }) => theme.elements.inputs}px;
  height: ${({ theme }) => theme.elements.inputs}px;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white100};
`