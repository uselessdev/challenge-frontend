import * as React from 'react'

export function useClickOutside({
  ref,
  handler,
}: {
  ref: React.MutableRefObject<HTMLElement | null>
  handler: (event: MouseEvent | TouchEvent | null) => void
}) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | null) => {
      // @ts-expect-error event.target has a mismatch types
      if (!ref?.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
