import React, { ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import { resources } from '../../store/resources/constants'
import { Resource } from '../../store/resources/models'
import { useResource } from '../../store/resources/useResource'
import { Button } from '../button/Button'
import { NumberInput } from '../numberInput/NumberInput'
import { Spacer } from '../spacer/Spacer'
import { Typography } from '../typography/Typography'

type ResourceCardProps = Resource

export const ResourceCard = ({
  id,
  name,
  color,
  iconComponent,
  stockpile,
  production,
  special,
}: ResourceCardProps): ReactElement => {
  const [resourceStockpile, setResourceStockpile] = useResource(id, 'stockpile')
  const [resourceProduction, setResourceProduction] = useResource(id, 'production')
  const [megaCreditsStockpile, setMegaCreditsStockpile] = useResource('mega-credits', 'stockpile')

  const onChangeResourceStockpile = useCallback(
    (value: number) => {
      setResourceStockpile(value)
    },
    [setResourceStockpile],
  )

  const onChangeResourceProduction = useCallback(
    (value: number) => {
      setResourceProduction(value)
    },
    [setResourceProduction],
  )

  const onSpecialClick = useCallback(() => {
    if (!special) {
      return
    }

    const newResourceStockpile = resourceStockpile - special.cost

    setResourceStockpile(newResourceStockpile)

    if (special.megaCreditsValue) {
      const newMegaCreditsStockpile = megaCreditsStockpile + special.megaCreditsValue

      setMegaCreditsStockpile(newMegaCreditsStockpile)
    }
  }, [
    megaCreditsStockpile,
    resourceStockpile,
    setMegaCreditsStockpile,
    setResourceStockpile,
    special,
  ])

  return (
    <Container>
      <HeaderContainer>
        <IconContainer style={{ backgroundColor: color }}>{iconComponent}</IconContainer>

        <Spacer size="sm" />

        <Typography kind="small">{name}</Typography>

        <Spacer size="sm" />

        {special ? (
          <SpecialContainer>
            <SpecialButton
              type="button"
              kind="secondary"
              disabled={resourceStockpile < special.cost}
              style={{ backgroundColor: color }}
              onClick={onSpecialClick}
            >
              {special.iconComponent}

              {special.megaCreditsValue && (
                <SpecialMegaCreditsValueContainer>
                  <Typography kind="tiny">{special.megaCreditsValue}</Typography>
                </SpecialMegaCreditsValueContainer>
              )}
            </SpecialButton>
          </SpecialContainer>
        ) : (
          <IconContainer />
        )}
      </HeaderContainer>

      {stockpile && (
        <>
          <Spacer size="sm" />

          <Typography kind="small">Stockpile</Typography>

          <Spacer size="xs" />

          <NumberInput
            min={Number(stockpile.min)}
            value={resourceStockpile}
            name={`${name} stockpile`}
            aria-label={`${name} stockpile`}
            onChange={onChangeResourceStockpile}
          />
        </>
      )}

      {production && (
        <>
          <Spacer size="sm" />

          <Typography kind="small">Production</Typography>

          <Spacer size="xs" />

          <NumberInput
            min={Number(production.min)}
            value={resourceProduction}
            name={`${name} production`}
            aria-label={`${name} production`}
            onChange={onChangeResourceProduction}
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

const HeaderContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${({ theme }) => theme.colors.white20};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconContainer = styled.div`
  width: ${({ theme }) => theme.elements.inputs}px;
  height: ${({ theme }) => theme.elements.inputs}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white100};
`

const SpecialContainer = styled.div`
  position: relative;
`

const SpecialButton = styled(Button)`
  width: auto;
`

const SPECIAL_MEGA_CREDITS_VALUE_CONTAINER = 16

const SpecialMegaCreditsValueContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${SPECIAL_MEGA_CREDITS_VALUE_CONTAINER}px;
  height: ${SPECIAL_MEGA_CREDITS_VALUE_CONTAINER}px;
  border: 1px solid ${({ theme }) => theme.colors.black100};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${resources['mega-credits'].color};
  display: flex;
  justify-content: center;
  align-items: center;
`
