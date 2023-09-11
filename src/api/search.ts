import { BooksVolumes } from '../mocks/data'

type SearchBooksArgs = {
  q: string
  startIndex: number
  maxResults: number
  category?: string
}

export const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export async function searchBooks({
  q = '',
  maxResults = 40,
  startIndex = 0,
  category = '',
}: Partial<SearchBooksArgs>): Promise<BooksVolumes> {
  const result = await fetch(
    `${API_BASE_URL}?q=${q}${
      category ? `+subject:` + category : ''
    }&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=relevance`
  )

  if (!result.ok) {
    throw new Error(result.statusText)
  }

  return result.json()
}
