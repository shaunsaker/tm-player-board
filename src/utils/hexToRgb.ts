// adapted from https://stackoverflow.com/a/11508164/7956924
export const hexToRgb = (hex: string): string => {
  const hexValue = hex.replace('#', '')
  const bigint = parseInt(hexValue, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return r + ',' + g + ',' + b
}
