import { useEffect, useRef, useState } from 'react'

import { usePrevious } from '../../hooks/usePrevious'

const INITIAL_CHANGED_AMOUNT = 0
const DISPLAY_DURATION = 4000

export const useChangedAmount = (value: number): number => {
  const previousValue = usePrevious(value) || 0

  const [changedAmount, setChangedAmount] = useState(INITIAL_CHANGED_AMOUNT)

  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    // if the value changed from the previous value, display the amount changed
    if (value !== previousValue) {
      let newChangedAmount = value - previousValue

      // if there is currently a timer running, we need to add that changed amount to the new one
      if (timerRef.current) {
        newChangedAmount += changedAmount
      }

      setChangedAmount(newChangedAmount)
    }
  }, [previousValue, value, changedAmount])

  useEffect(() => {
    // only show changedAmount for a few seconds, ie.
    // if changedAmount is set, then start a timer
    if (changedAmount) {
      // clear any existing timer if applicable
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        setChangedAmount(INITIAL_CHANGED_AMOUNT)
      }, DISPLAY_DURATION)
    }
  }, [changedAmount])

  useEffect(() => {
    // on unmount, clear the timer
    return () => {
      clearTimeout(timerRef.current)
    }
  })

  return changedAmount
}
