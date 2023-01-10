import styled from 'styled-components'

import { Link } from '../link/Link'
import { getTypographyCss } from '../typography/Typography'

export const LinkText = styled(Link)`
  ${getTypographyCss['paragraph']};
  font-weight: 700;
  text-decoration-line: underline;
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
