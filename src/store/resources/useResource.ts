import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { resources } from './constants'
import { ResourceId, ResourceType } from './models'

export const useResource = (
  resourceId: ResourceId,
  resourceType: ResourceType,
): [number, (newValue: number) => void] => {
  const initialResourceValue = resources[resourceId][resourceType]?.initial || 0

  const [resourceValue, setResourceValue] = useQueryParam(
    `${resourceId}-${resourceType}`,
    withDefault(NumberParam, initialResourceValue),
  )

  return [resourceValue, setResourceValue]
}
