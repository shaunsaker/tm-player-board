import React, { ChangeEvent, forwardRef, HTMLProps, ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import MinusIcon from '../../assets/icons/minus-icon.svg'
import PlusIcon from '../../assets/icons/plus-icon.svg'
import { Button } from '../button/Button'
import { getTypographyCss } from '../typography/Typography'
import { ChangedAmount } from './changedAmount/ChangedAmount'

type NumberInputProps = HTMLProps<HTMLInputElement> & {
  min: number
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ min, value, onChange, ...props }, ref): ReactElement => {
    const onAddClick = useCallback(() => {
      const newValue = value + 1

      // @ts-expect-error mocked change event
      onChange({
        target: {
          value: newValue,
        },
      })
    }, [value, onChange])

    const onSubtractClick = useCallback(() => {
      const newValue = value - 1

      // @ts-expect-error mocked change event
      onChange({
        target: {
          value: newValue,
        },
      })
    }, [value, onChange])

    return (
      <Container>
        <AddSubtractButton
          kind="secondary"
          type="button"
          disabled={value === min}
          onClick={onSubtractClick}
        >
          <MinusIcon />
        </AddSubtractButton>

        <InputContainer>
          <Input
            {...props}
            ref={ref}
            as="input"
            type="number"
            min={min}
            value={value}
            onChange={onChange}
          />

          <ChangeAmountContainer>
            <ChangedAmount value={value} />
          </ChangeAmountContainer>
        </InputContainer>

        <AddSubtractButton kind="secondary" type="button" onClick={onAddClick}>
          <PlusIcon />
        </AddSubtractButton>
      </Container>
    )
  },
)

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm}px;
`

const AddSubtractButton = styled(Button)`
  width: ${({ theme }) => theme.elements.inputs}px;
`

const InputContainer = styled.div`
  position: relative;
`

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: ${({ theme }) => theme.elements.inputs}px;
  height: ${({ theme }) => theme.elements.inputs}px;
  border: 1px solid ${({ theme }) => theme.colors.black100};
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

const ChangeAmountContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacing.xs}px;
`
