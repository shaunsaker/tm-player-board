import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

type PageContentProps = { children: ReactNode }

export const PageContent = ({ children }: PageContentProps): ReactElement => {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.sm}px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
