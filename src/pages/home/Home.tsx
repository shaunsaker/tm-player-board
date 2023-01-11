import React, { ReactElement } from 'react'
import styled from 'styled-components'

import LogoIcon from '../../assets/logo-icon.svg'
import { AnchorText } from '../../components/anchorText/AnchorText'
import { Button } from '../../components/button/Button'
import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { Spacer } from '../../components/spacer/Spacer'
import { Typography } from '../../components/typography/Typography'

export const Home = (): ReactElement => {
  const hasExistingGame = true // TODO: SS pending logic

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

      <FooterContainer>
        <ButtonsContainer>
          {hasExistingGame && (
            <>
              <Button type="button" kind="secondary">
                CONTINUE GAME
              </Button>

              <Spacer />
            </>
          )}

          <Button type="button" kind="primary">
            NEW GAME
          </Button>
        </ButtonsContainer>

        <Spacer />

        <Typography kind="small">
          Made with ❤️ of board games by{' '}
          <AnchorText href="https://shaunsaker.com">Shaun Saker</AnchorText>
        </Typography>
      </FooterContainer>
    </Page>
  )
}

const StyledLogoIcon = styled(LogoIcon)`
  width: 100px;
  min-height: 100px;
`

const FooterContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.elements.content.width}px;
  margin: 0 auto;
`
