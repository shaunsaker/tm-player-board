import React, {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
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
    const [debouncedValue, setDebouncedValue] = useState(value)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
      const handler = setTimeout(() => {
        if (isTyping) {
          onChange(debouncedValue)
          setIsTyping(false)
        }
      }, 1000)

      return () => {
        clearTimeout(handler)
      }
    }, [debouncedValue, isTyping, onChange])

    useEffect(() => {
      setDebouncedValue(value)
    }, [value])

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value, 10)
      setDebouncedValue(newValue)
      setIsTyping(true)
    }, [])

    const handleBlur = useCallback(() => {
      onChange(debouncedValue)
      setIsTyping(false)
    }, [debouncedValue, onChange])

    const handleButtonClick = useCallback(
      (change: number) => {
        const newValue = debouncedValue + change
        setDebouncedValue(newValue)
        setIsTyping(true)
      },
      [debouncedValue],
    )

    return (
      <Container>
        <AddSubtractButton
          kind="secondary"
          type="button"
          disabled={debouncedValue === min}
          onClick={() => handleButtonClick(-1)}
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
            value={debouncedValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <ChangeAmountContainer>
            <ChangedAmount value={debouncedValue} />
          </ChangeAmountContainer>
        </InputContainer>

        <AddSubtractButton kind="secondary" type="button" onClick={() => handleButtonClick(1)}>
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
