import React, { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import LogoIcon from '../../assets/icons/logo-icon.svg'
import { AnchorText } from '../../components/anchorText/AnchorText'
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
        <StyledLogoIcon />

        <Typography kind="heading" as="h1">
          Welcome to the unofficial Terraforming Mars digital Player Board 👋🏻
        </Typography>

        <Spacer />

        <Typography kind="paragraph">
          Where bumping resource markers, fuzzy maths calculations and lack of resource cubes are a
          thing of the past 😎
          <Spacer />
          Easily keep track of resources and their production. Allocate resources in the Production
          Phase at the touch of a button.
          <Spacer />
          Mobile-friendly ✅<br /> Offline ✅<br /> Undo/Redo functionality ✅<br /> Lightning fast
          ✅
          <Spacer />
          To get started, click “New Game”. Let the terraforming begin! God speed corporation X!
        </Typography>
      </Page.Content>

      <FooterBar>
        <ButtonsContainer>
          <Button type="button" kind="primary" onClick={onNewGameClick}>
            NEW GAME
          </Button>
        </ButtonsContainer>

        <Spacer />

        <Typography kind="small">
          Made with ❤️ of board games by{' '}
          <AnchorText href="https://shaunsaker.com">Shaun Saker</AnchorText>
        </Typography>
      </FooterBar>
    </Page>
  )
}

const StyledLogoIcon = styled(LogoIcon)`
  width: 100px;
  min-height: 100px;
`

const ButtonsContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
`
