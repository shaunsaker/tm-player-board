import styled from 'styled-components'

import { getTypographyCss } from '../typography/Typography'

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: ${({ theme }) => theme.elements.inputs}px;
  height: ${({ theme }) => theme.elements.inputs}px;
  border: 1px solid ${({ theme }) => theme.colors.white20};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background-color: ${({ theme }) => theme.colors.black100};
  text-align: center;
  ${getTypographyCss['small']};
  transition: ${({ theme }) => theme.transition.default};

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  -moz-appearance: textfield;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.white20};
  }
`
