import React, { forwardRef, useCallback, useState } from 'react'
import styled from 'styled-components'

import EyeIcon from '../../assets/eye-icon.svg'
import EyeSlashIcon from '../../assets/eye-slash-icon.svg'
import { IconButton } from '../iconButton/IconButton'
import { Input, InputProps } from '../input/Input'

type PasswordInputProps = InputProps

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const onToggleShowPasswordClick = useCallback(() => {
      setShowPassword(!showPassword)
    }, [showPassword])

    return (
      <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'}>
        <InputIconContainer>
          <IconButton name="show-password" onClick={onToggleShowPasswordClick}>
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </IconButton>
        </InputIconContainer>
      </Input>
    )
  },
)

const InputIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  display: flex;
  align-items: center;
`
