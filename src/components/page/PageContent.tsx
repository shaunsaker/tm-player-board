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
  padding: ${({ theme }) => theme.spacing.lg}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
