import React, { ChangeEvent, forwardRef, HTMLProps, ReactElement, useCallback } from 'react'
import styled from 'styled-components'

import MinusIcon from '../../assets/icons/minus-icon.svg'
import PlusIcon from '../../assets/icons/plus-icon.svg'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { ChangedAmount } from './changedAmount/ChangedAmount'

type NumberInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'> & {
  min: number
  value: number
  onChange: (value: number) => void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ min, value, onChange, ...props }, ref): ReactElement => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10)

        onChange(newValue)
      },
      [onChange],
    )

    const onAddClick = useCallback(() => {
      const newValue = value + 1

      onChange(newValue)
    }, [value, onChange])

    const onSubtractClick = useCallback(() => {
      const newValue = value - 1

      onChange(newValue)
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
            onChange={handleChange}
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

const ChangeAmountContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacing.xs}px;
`
