import { ChangeEvent, useMemo, useState, useTransition } from 'react'
import { BooksVolumes } from '../mocks/data'
import { searchBooks } from '../api/search'

export function useSearch() {
  const [term, setTerm] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [results, setResults] = useState<BooksVolumes | null>(null)

  const { onChangeSearchTerm } = useMemo(() => {
    const onChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value)
    }

    if (term.length > 0) {
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
  }, [term])

  return {
    term,
    loading,
    onChangeSearchTerm,
    results,
  }
}
