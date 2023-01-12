import styled from 'styled-components'

export const FooterBar = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.black100};
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: ${({ theme }) => theme.spacing.md}px;
  }
`
