import { useEffect, useState } from 'react'

export function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, time)

    return () => clearInterval(timer)
  }, [value, time])

  return debounceValue
}
