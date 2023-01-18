import styled from 'styled-components'

export const FooterBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${({ theme }) => theme.elements.footerBar}px;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.black100};
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.lg}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  }
`
