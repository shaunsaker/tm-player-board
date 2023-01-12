export const objectToArray = <T extends object>(object: Record<string, T>): T[] => {
  return Object.keys(object).map(key => object[key])
}
