import { ChangeEvent, useMemo, useState } from 'react'
import { BooksVolumes } from '../mocks/data'
import { searchBooks } from '../api/search'
import { useDebounceValue } from './use-debounce'

export function useSearch() {
  const [term, setTerm] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [results, setResults] = useState<BooksVolumes | null>(null)
  const debounced = useDebounceValue(term)

  const { onChangeSearchTerm } = useMemo(() => {
    const onChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value)
    }

    if (debounced.length > 0) {
      setIsLoading(true)

      searchBooks().then(response => {
        if (response.success) {
          setResults(response.data)
        }

        setIsLoading(false)
      })
    }

    return {
      onChangeSearchTerm,
    }
  }, [debounced])

  return {
    term,
    loading,
    onChangeSearchTerm,
    results,
  }
}
