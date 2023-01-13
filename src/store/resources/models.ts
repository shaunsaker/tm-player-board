import { ReactElement } from 'react'

export type ResourceId = 'tr' | 'mega-credits' | 'steel' | 'titanium' | 'plants' | 'energy' | 'heat'

export type ResourceType = 'stockpile' | 'production'

export type Resource = {
  id: ResourceId
  name: string
  iconComponent: ReactElement
  color: string
  stockpile?: {
    initial: number
    min: number
  }
  production?: {
    initial: number
    min: number
  }
  special?: {
    iconComponent: ReactElement
    cost: number
    megaCreditsValue?: number
  }
}
