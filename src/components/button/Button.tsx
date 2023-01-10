import React, { forwardRef, HTMLProps } from 'react'
import styled from 'styled-components'

import { getTypographyCss } from '../typography/Typography'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  type: 'button' | 'submit'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return <StyledButton {...props} as="button" ref={ref} />
})

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 2px solid ${({ theme }) => theme.colors.white100};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme }) => theme.colors.black100};
  padding: ${({ theme }) => theme.spacing.sm}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getTypographyCss['paragraph']};
  font-weight: 700;
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
