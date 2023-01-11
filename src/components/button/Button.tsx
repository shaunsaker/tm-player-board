import React, { forwardRef, HTMLProps } from 'react'
import styled, { css } from 'styled-components'

import { getTypographyCss } from '../typography/Typography'

type ButtonKind = 'primary' | 'secondary'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  type: 'button' | 'submit'
  kind: ButtonKind
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return <StyledButton {...props} as="button" ref={ref} />
})

export const getButtonCss: Record<ButtonKind, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};

    &:hover,
    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.black100};

    &:hover,
    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.accent};
    }

    &:active {
      color: ${({ theme }) => theme.colors.accent};
    }
  `,
}

const StyledButton = styled.button<{
  kind: ButtonKind
}>`
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 2px solid ${({ theme }) => theme.colors.white20};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.sm}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getTypographyCss['paragraph']};
  font-weight: 700;
  transition: ${({ theme }) => theme.transition.default};
  ${({ kind }) => getButtonCss[kind]};
`
