export type FilterProps = {
  mainTitle?: string
  filters: FilterContentProps
  dispatch: React.Dispatch<React.SetStateAction<boolean>>
  hasSelectedFilters: boolean
  resetFilters: () => void
}

export type FilterContentProps = Record<
  'price' | 'availableItems' | 'availableFormats',
  {
    title: string
    items: Array<{
      id: string | number
      label?: string
      checked: boolean
      rangeValue?: {
        min: number
        max: number
      }
    }>
  }
>
