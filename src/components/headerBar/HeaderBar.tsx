import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import appJson from '../../../app.json'
import AngleLeftIcon from '../../assets/icons/angle-left-icon.svg'
import LogoIcon from '../../assets/icons/logo-icon.svg'
import { RoutePaths } from '../../Router'
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

          <Spacer size="sm" />
        </>
      )}

      <StyledLink to={RoutePaths.home}>
        <StyledLogoIcon />

        <Spacer size="sm" />

        <AppNameText kind="paragraph">{appJson.displayName}</AppNameText>

        <Spacer />
      </StyledLink>

      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.black100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white20};
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
