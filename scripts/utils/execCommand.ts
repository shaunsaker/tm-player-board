import spawnAsync from '@expo/spawn-async'

export const execCommand = async (command: string, showLogs = false): Promise<void> => {
  const parts = command.split(' ')
  const process = parts[0]
  const args = [...parts.slice(1, parts.length)]

  const mainProcess = spawnAsync(process, args)
  const childProcess = mainProcess.child

  if (showLogs) {
    childProcess.stdout?.on('data', data => {
      console.log(data)
    })

    childProcess.stderr?.on('data', data => {
      console.error(data)
    })
  }

  await mainProcess
}
