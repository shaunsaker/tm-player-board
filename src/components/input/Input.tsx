import React, { forwardRef, HTMLProps } from 'react'
import styled from 'styled-components'

import { Spacer } from '../spacer/Spacer'
import { getTypographyCss, Typography } from '../typography/Typography'

export type InputProps = {
  label: string
  errorMessage?: string
} & HTMLProps<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, children, errorMessage, ...props }, ref) => {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>

        <Spacer size="sm" />

        <InputContainer>
          <StyledInput
            {...props}
            as="input"
            ref={ref}
            name={name}
            aria-invalid={errorMessage ? 'true' : 'false'}
          />

          {children}
        </InputContainer>

        {errorMessage && (
          <>
            <Spacer size="sm" />

            <ErrorText kind="small" role="alert">
              {errorMessage}
            </ErrorText>
          </>
        )}
      </Container>
    )
  },
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  ${getTypographyCss['small']};
`

const InputContainer = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.white60};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.white20};
  ${getTypographyCss['paragraph']};
  text-align: center;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.white100};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.red};
  }
`

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.red};
`
