import styled from 'styled-components'

export const AnchorText = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferer',
}))`
  font-weight: 700;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent80};
  }
`
