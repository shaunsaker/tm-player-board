import React, { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import LogoIcon from '../../assets/icons/logo-icon.svg'
import { Button } from '../../components/button/Button'
import { FooterBar } from '../../components/footerBar/FooterBar'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { Spacer } from '../../components/spacer/Spacer'
import { Typography } from '../../components/typography/Typography'
import { RoutePaths } from '../../Router'

export const Home = (): ReactElement => {
  const navigate = useNavigate()

  const onNewGameClick = useCallback(() => {
    navigate(RoutePaths.game)
  }, [navigate])

  return (
    <Page>
      <HeaderBar />

      <Page.Content>
        <Container>
          <StyledLogoIcon />

          <Typography kind="heading" as="h1">
            Welcome to the unofficial Terraforming Mars digital Player Board 👋🏻
          </Typography>

          <Spacer />

          <Typography kind="paragraph">
            Where bumping resource markers, fuzzy maths calculations and lack of resource cubes are
            a thing of the past 😎 Easily keep track of resources and their production. Allocate
            resources in the Production Phase at the touch of a button.
          </Typography>

          <Spacer />

          <StyledList>
            <li>
              <Typography kind="paragraph">✅ Mobile-friendly</Typography>
            </li>

            <li>
              <Typography kind="paragraph">✅ Offline</Typography>
            </li>

            <li>
              <Typography kind="paragraph">✅ Undo/Redo functionality</Typography>
            </li>

            <li>
              <Typography kind="paragraph">✅ Lightning fast</Typography>
            </li>
          </StyledList>

          <Spacer />

          <Typography kind="paragraph">
            Let the terraforming begin! God speed corporation X!
          </Typography>

          <Spacer />

          <Button type="button" kind="primary" onClick={onNewGameClick}>
            NEW GAME
          </Button>
        </Container>
      </Page.Content>

      <FooterBar />
    </Page>
  )
}

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLogoIcon = styled(LogoIcon)`
  width: 100px;
  min-height: 64px;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`
