import { ChangeEvent, useState } from 'react'
import { useDebounceValue } from './use-debounce'
import { useBooks } from './use-books'

export function useSearch() {
  const [term, setTerm] = useState('')
  const value = useDebounceValue(term)

  const onChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const { books, isLoading } = useBooks({
    q: value,
    maxResults: 6,
    enabled: Boolean(value),
  })

  const suggestions =
    isLoading || !books
      ? []
      : books.items.map(book => ({
          id: book.id,
          title: book.volumeInfo.title,
        }))

  return {
    term,
    suggestions,
    loading: isLoading,
    onChangeSearchTerm,
    results: books,
    setTerm,
  }
}
