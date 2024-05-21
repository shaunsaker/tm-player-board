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
      <ContentContainer>
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
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.elements.tabBar}px;
`

const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidths.content}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Tab = styled(Button)<{ active?: boolean }>`
  flex: 1;
  color: ${({ active }) =>
    active ? ({ theme }) => theme.colors.accent : ({ theme }) => theme.colors.white100};
`
