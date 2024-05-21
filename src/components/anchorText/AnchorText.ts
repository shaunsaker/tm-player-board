import { HTMLProps } from 'react'
import styled from 'styled-components'

type AnchorTextProps = HTMLProps<HTMLAnchorElement> & { ['aria-label']: string }

export const AnchorText = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferer',
}))<AnchorTextProps>`
  font-weight: 700;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent80};
  }
`
