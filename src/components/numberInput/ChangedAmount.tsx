import React, { ReactElement } from 'react'

import { theme } from '../../theme/theme'
import { Typography } from '../typography/Typography'

type ChangedAmountProps = {
  changedAmount: number
}

export const ChangedAmount = ({ changedAmount }: ChangedAmountProps): ReactElement | null => {
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
