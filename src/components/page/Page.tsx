import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

type PageProps = { children: ReactNode }

export const Page = ({ children }: PageProps): ReactElement => {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`
