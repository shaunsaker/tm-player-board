import styled, { css } from 'styled-components'

import { theme } from '../../theme/theme'

type SpacerSize = keyof typeof theme.spacing

const getSpacerCss: Record<SpacerSize, ReturnType<typeof css>> = {
  xs: css`
    width: ${({ theme }) => theme.spacing.xs}px;
    min-height: ${({ theme }) => theme.spacing.xs}px;
  `,
  sm: css`
    width: ${({ theme }) => theme.spacing.sm}px;
    min-height: ${({ theme }) => theme.spacing.sm}px;
  `,
  md: css`
    width: ${({ theme }) => theme.spacing.md}px;
    min-height: ${({ theme }) => theme.spacing.md}px;
  `,
  lg: css`
    width: ${({ theme }) => theme.spacing.lg}px;
    min-height: ${({ theme }) => theme.spacing.lg}px;
  `,
}

type SpacerProps = {
  size?: SpacerSize
}

export const Spacer = styled.div<SpacerProps>`
  ${({ size = 'md' }) => getSpacerCss[size]};
`
