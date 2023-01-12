import { useCallback } from 'react'

import { useResource } from './useResource'

export const useProductionPhase = (): (() => void) => {
  const [trStockpile] = useResource('tr', 'stockpile')
  const [megaCreditsStockpile, setMegaCreditsStockpile] = useResource('mega-credits', 'stockpile')
  const [megaCreditsProduction] = useResource('mega-credits', 'production')
  const [steelStockpile, setSteelStockpile] = useResource('steel', 'stockpile')
  const [steelProduction] = useResource('steel', 'production')
  const [titaniumStockpile, setTitaniumStockpile] = useResource('titanium', 'stockpile')
  const [titaniumProduction] = useResource('titanium', 'production')
  const [plantsStockpile, setPlantsStockpile] = useResource('plants', 'stockpile')
  const [plantsProduction] = useResource('plants', 'production')
  const [energyStockpile, setEnergyStockpile] = useResource('energy', 'stockpile')
  const [energyProduction] = useResource('energy', 'production')
  const [heatStockpile, setHeatStockpile] = useResource('heat', 'stockpile')
  const [heatProduction] = useResource('heat', 'production')

  const initiateProductionPhase = useCallback(() => {
    // produce megaCredits
    const newMegaCreditsStockpile = trStockpile + megaCreditsProduction + megaCreditsStockpile
    setMegaCreditsStockpile(newMegaCreditsStockpile)

    // producte steel
    const newSteelStockpile = steelProduction + steelStockpile
    setSteelStockpile(newSteelStockpile)

    // produce titanium
    const newTitaniumStockpile = titaniumProduction + titaniumStockpile
    setTitaniumStockpile(newTitaniumStockpile)

    // produce plants
    const newPlantsStockpile = plantsProduction + plantsStockpile
    setPlantsStockpile(newPlantsStockpile)

    // produce energy and remove the energy that was moved to heat
    const newEnergyStockpile = energyProduction
    setEnergyStockpile(newEnergyStockpile)

    // produce heat
    const newHeatFromEnergy = energyStockpile
    const newHeatStockpile = heatProduction + heatStockpile + newHeatFromEnergy
    setHeatStockpile(newHeatStockpile)
  }, [
    energyProduction,
    energyStockpile,
    heatProduction,
    heatStockpile,
    megaCreditsProduction,
    megaCreditsStockpile,
    plantsProduction,
    plantsStockpile,
    setEnergyStockpile,
    setHeatStockpile,
    setMegaCreditsStockpile,
    setPlantsStockpile,
    setSteelStockpile,
    setTitaniumStockpile,
    steelProduction,
    steelStockpile,
    titaniumProduction,
    titaniumStockpile,
    trStockpile,
  ])

  return initiateProductionPhase
}
