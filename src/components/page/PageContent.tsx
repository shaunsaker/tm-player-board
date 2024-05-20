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
  padding: ${({ theme }) => theme.spacing.sm}px;
  /* firefox fix */
  padding-bottom: ${({ theme }) => theme.elements.headerBar}px;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
