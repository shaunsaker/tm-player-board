import React, { ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { Spacer } from '../../components/spacer/Spacer'
import { Typography } from '../../components/typography/Typography'

export const Error = (): ReactElement => {
  const error = useRouteError() as { statusText?: string; message: string }

  return (
    <Page>
      <HeaderBar />

      <Typography kind="title" as="h1">
        Oops!
      </Typography>

      <Spacer size="lg" />

      <Typography kind="paragraph" as="p">
        {error.statusText || error.message}
      </Typography>
    </Page>
  )
}
