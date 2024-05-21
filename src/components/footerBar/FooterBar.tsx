import React, { ReactElement } from 'react'
import styled from 'styled-components'

import pkg from '../../../package.json'
import GithubIcon from '../../assets/icons/github-icon.svg'
import { AnchorText } from '../anchorText/AnchorText'
import { Typography } from '../typography/Typography'

export const FooterBar = (): ReactElement => {
  return (
    <Container>
      <VersionContainer kind="small">
        <AnchorText
          href="https://github.com/shaunsaker/tm-player-board"
          aria-label="github"
          style={{ fontSize: 20 }}
        >
          <GithubIcon />
        </AnchorText>
        v{pkg.version}
        <AnchorText
          href="https://github.com/shaunsaker/tm-player-board/releases"
          aria-label="changelog"
        >
          Changelog
        </AnchorText>
      </VersionContainer>

      <Typography kind="small">
        Made with ❤️ of board games by{' '}
        <AnchorText href="https://shaunsaker.com" aria-label="shaun saker">
          Shaun Saker
        </AnchorText>
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: ${({ theme }) => theme.elements.footerBar}px;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  }
`

const VersionContainer = styled(Typography)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`
