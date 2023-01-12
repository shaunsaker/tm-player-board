import React from 'react'

import EnergyIcon from '../../assets/energy-icon.svg'
import HeatIcon from '../../assets/heat-icon.svg'
import MegaCreditIcon from '../../assets/mega-credit-icon.svg'
import PlantsIcon from '../../assets/plants-icon.svg'
import SteelIcon from '../../assets/steel-icon.svg'
import TitaniumIcon from '../../assets/titanium-icon.svg'
import TRIcon from '../../assets/tr-icon.svg'
import { Resource, ResourceId } from './models'

export const resources: Record<ResourceId, Resource> = {
  tr: {
    id: 'tr',
    name: 'TR',
    iconComponent: <TRIcon />,
    color: '#D8280B',
    stockpile: {
      initial: 20,
      min: 20,
    },
  },
  'mega-credits': {
    id: 'mega-credits',
    name: 'Mega Credits',
    iconComponent: <MegaCreditIcon />,
    color: '#f2ae25',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: -5,
    },
  },
  steel: {
    id: 'steel',
    name: 'Steel',
    iconComponent: <SteelIcon />,
    color: '#926A43',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: 0,
    },
  },
  titanium: {
    id: 'titanium',
    name: 'Titanium',
    iconComponent: <TitaniumIcon />,
    color: '#4C4C4D',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: 0,
    },
  },
  plants: {
    id: 'plants',
    name: 'Plants',
    iconComponent: <PlantsIcon />,
    color: '#85BD2D',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: 0,
    },
  },
  energy: {
    id: 'energy',
    name: 'Energy',
    iconComponent: <EnergyIcon />,
    color: '#832079',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: 0,
    },
  },
  heat: {
    id: 'heat',
    name: 'Heat',
    iconComponent: <HeatIcon />,
    color: '#F7361D',
    stockpile: {
      initial: 0,
      min: 0,
    },
    production: {
      initial: 1,
      min: 0,
    },
  },
}
