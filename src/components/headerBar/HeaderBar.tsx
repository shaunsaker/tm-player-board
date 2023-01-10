import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import appJson from '../../../app.json'
import AngleLeftIcon from '../../assets/angle-left-icon.svg'
import LogoIcon from '../../assets/logo-icon.svg'
import { Routes } from '../../Router'
import { IconButton } from '../iconButton/IconButton'
import { Link } from '../link/Link'
import { Spacer } from '../spacer/Spacer'
import { Typography } from '../typography/Typography'
import { useGoBack } from './useGoBack'
import { useShowBackButton } from './useShowBackButton'

type HeaderBarProps = { children?: ReactNode }

export const HeaderBar = ({ children }: HeaderBarProps): ReactElement => {
  const showBackButton = useShowBackButton()
  const goBack = useGoBack()

  return (
    <Container>
      {showBackButton && (
        <>
          <IconButton name="back" onClick={goBack}>
            <AngleLeftIcon />
          </IconButton>

          <Spacer />
        </>
      )}

      <StyledLink to={Routes.home}>
        <StyledLogoIcon />

        <Spacer />

        <AppNameText kind="paragraph">{appJson.displayName}</AppNameText>

        <Spacer />
      </StyledLink>

      {children}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 ${({ theme }) => theme.spacing.md}px;
  }
`

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
`

const StyledLogoIcon = styled(LogoIcon)`
  font-size: 24px;
  min-width: 24px;
`

const AppNameText = styled(Typography)`
  text-align: left;
`
