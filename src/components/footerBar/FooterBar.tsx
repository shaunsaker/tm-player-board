import React, { ReactElement } from 'react'
import styled from 'styled-components'

import pkg from '../../../package.json'
import { AnchorText } from '../anchorText/AnchorText'
import { Typography } from '../typography/Typography'

export const FooterBar = (): ReactElement => {
  return (
    <Container>
      <Typography kind="small">v{pkg.version}</Typography>

      <Typography kind="small">
        Made with ❤️ of board games by{' '}
        <AnchorText href="https://shaunsaker.com">Shaun Saker</AnchorText>
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.elements.footerBar}px;
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
