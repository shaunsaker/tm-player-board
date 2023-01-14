import { useCallback, useEffect, useRef, useState } from 'react'

// adapted from https://stackoverflow.com/a/54749871
export const useLongPress = (
  callback: () => void,
  duration = 400,
): {
  eventHandlers: {
    onMouseDown: () => void
    onMouseUp: () => void
    onMouseLeave: () => void
    onTouchStart: () => void
    onTouchEnd: () => void
  }
  isPressing: boolean
} => {
  const [startLongPress, setStartLongPress] = useState(false)

  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const start = useCallback(() => {
    setStartLongPress(true)
  }, [])

  const stop = useCallback(() => {
    setStartLongPress(false)
  }, [])

  const onTimeEnd = useCallback(() => {
    callback()

    stop()
  }, [callback, stop])

  useEffect(() => {
    if (startLongPress) {
      timerRef.current = setTimeout(onTimeEnd, duration)
    } else {
      clearTimeout(timerRef.current)
    }

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [duration, onTimeEnd, startLongPress])

  return {
    eventHandlers: {
      onMouseDown: start,
      onMouseUp: stop,
      onMouseLeave: stop,
      onTouchStart: start,
      onTouchEnd: stop,
    },
    isPressing: startLongPress,
  }
}
