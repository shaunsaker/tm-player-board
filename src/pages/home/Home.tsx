import React, { ReactElement } from 'react'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { Typography } from '../../components/typography/Typography'

export const Home = (): ReactElement => {
  return (
    <Page>
      <HeaderBar />

      <Typography kind="title" as="h1">
        Ello Gov'na!
      </Typography>
    </Page>
  )
}
