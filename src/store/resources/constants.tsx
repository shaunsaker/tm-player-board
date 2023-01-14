import React from 'react'

import EnergyIcon from '../../assets/icons/energy-icon.svg'
import HeatIcon from '../../assets/icons/heat-icon.svg'
import HeatTemperatureIcon from '../../assets/icons/heat-temperature-icon.svg'
import MegaCreditIcon from '../../assets/icons/mega-credit-icon.svg'
import PlantsGreeneryIcon from '../../assets/icons/plants-greenery-icon.svg'
import PlantsIcon from '../../assets/icons/plants-icon.svg'
import SteelBuildingIcon from '../../assets/icons/steel-building-icon.svg'
import SteelIcon from '../../assets/icons/steel-icon.svg'
import TitaniumBuildingIcon from '../../assets/icons/titanium-building-icon.svg'
import TitaniumIcon from '../../assets/icons/titanium-icon.svg'
import TRIcon from '../../assets/icons/tr-icon.svg'
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
