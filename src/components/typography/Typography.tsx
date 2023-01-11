import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-400.css'

import styled, { css } from 'styled-components'

export type TypographyKind = 'title' | 'heading' | 'paragraph' | 'small'

export const getTypographyCss: Record<TypographyKind, ReturnType<typeof css>> = {
  title: css`
    font-family: Inter;
    font-size: 64px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 48px;
      line-height: 48px;
    }
  `,
  heading: css`
    font-family: Inter;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
  paragraph: css`
    font-family: Inter;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white100};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
      line-height: 21px;
    }
  `,
  small: css`
    font-family: Inter;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
}

export const Typography = styled.div<{
  kind: TypographyKind
}>`
  all: unset;
  ${({ kind }) => getTypographyCss[kind]};
`
