import * as consola from 'consola'

const logger = consola

export const log = (message: string, type: 'error' | 'info' | 'success' = 'info'): void => {
  // @ts-expect-error consola types incorrect or I'm missing something, this works fine
  logger[type](message)
}
