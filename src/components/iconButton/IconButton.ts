import { HTMLProps } from 'react'
import styled from 'styled-components'

type IconButtonProps = HTMLProps<HTMLButtonElement> & { title: string }

export const IconButton = styled.button.attrs(() => ({ type: 'button' }))<IconButtonProps>`
  all: unset;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white100};
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:focus-visible,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
