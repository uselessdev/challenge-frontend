import { useEffect, useState } from 'react'

const TIME = import.meta.env.MODE === 'test' ? 0 : 250

export function useDebounceValue(value: string, time = TIME) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, time)

    return () => clearInterval(timer)
  }, [value, time])

  return debounceValue
}
