import { ChangeEvent } from 'react'

export type FilterProps = {
  mainTitle?: string
  filters?: Record<string, string[]>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type FilterContentProps = Record<
  'price' | 'availableItems' | 'availableFormats',
  {
    title: string
    name: string
    items: Array<{
      id: string | number
      label?: string
      value?: unknown
      rangeValue?: {
        min: number
        max: number
      }
    }>
  }
>
