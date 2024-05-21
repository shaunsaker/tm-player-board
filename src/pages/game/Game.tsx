import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Page } from '../../components/page/Page'
import { TabBar } from '../../components/tabBar/TabBar'
import { useActiveGameTab } from '../../hooks/useActiveGameTab'
import { ActionsTab } from './tabs/ActionsTab'
import { SummaryTab } from './tabs/SummaryTab'

export const Game = (): ReactElement => {
  const [activeTab] = useActiveGameTab()

  return (
    <Page>
      <HeaderBar />

      <TabContainer>{activeTab === 'actions' ? <ActionsTab /> : <SummaryTab />}</TabContainer>

      <TabBar />
    </Page>
  )
}

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
