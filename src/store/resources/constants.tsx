import React from 'react'

import EnergyIcon from '../../assets/energy-icon.svg'
import HeatIcon from '../../assets/heat-icon.svg'
import HeatTemperatureIcon from '../../assets/heat-temperature-icon.svg'
import MegaCreditIcon from '../../assets/mega-credit-icon.svg'
import PlantsGreeneryIcon from '../../assets/plants-greenery-icon.svg'
import PlantsIcon from '../../assets/plants-icon.svg'
import SteelBuildingIcon from '../../assets/steel-building-icon.svg'
import SteelIcon from '../../assets/steel-icon.svg'
import TitaniumBuildingIcon from '../../assets/titanium-building-icon.svg'
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
    special: {
      iconComponent: <SteelBuildingIcon />,
      cost: 1,
      megaCreditsValue: 2,
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
    special: {
      iconComponent: <TitaniumBuildingIcon />,
      cost: 1,
      megaCreditsValue: 3,
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
    special: {
      iconComponent: <PlantsGreeneryIcon />,
      cost: 8,
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
    special: {
      iconComponent: <HeatTemperatureIcon />,
      cost: 8,
    },
  },
}
