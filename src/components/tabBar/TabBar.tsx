import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { GameTabs, useActiveGameTab } from '../../hooks/useActiveGameTab'
import { Button } from '../button/Button'

const TABS: Array<{
  id: GameTabs
  label: string
}> = [
  { id: 'actions', label: 'Actions' },
  { id: 'summary', label: 'Summary' },
]

export const TabBar = (): ReactElement => {
  const [activeTab, setActiveTab] = useActiveGameTab()

  return (
    <Container>
      {TABS.map(tab => (
        <Tab
          key={tab.id}
          kind="secondary"
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.elements.tabBar}px;
  border-top: 1px solid ${({ theme }) => theme.colors.white20};
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  align-items: center;
`

const Tab = styled(Button)<{ active?: boolean }>`
  flex: 1;
  color: ${({ active }) =>
    active ? ({ theme }) => theme.colors.accent : ({ theme }) => theme.colors.white100};
`
