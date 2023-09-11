import { ChangeEvent } from 'react'

export type SearchProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  suggestions: Array<{ id: string; title: string }>
}
