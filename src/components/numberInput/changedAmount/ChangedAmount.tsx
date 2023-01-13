import React, { ReactElement } from 'react'

import { theme } from '../../../theme/theme'
import { Typography } from '../../typography/Typography'
import { useChangedAmount } from './useChangedAmount'

type ChangedAmountProps = {
  value: number
}

export const ChangedAmount = ({ value }: ChangedAmountProps): ReactElement | null => {
  const changedAmount = useChangedAmount(value)

  if (!changedAmount) {
    return null
  }

  return (
    <Typography
      kind="tiny"
      style={{ color: changedAmount > 0 ? theme.colors.green : theme.colors.red }}
    >
      {changedAmount > 0 ? '+' : ''}
      {changedAmount}
    </Typography>
  )
}
