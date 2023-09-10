import { BooksVolumes } from '../mocks/data'

type SuccessResponse = {
  success: true
  data: BooksVolumes
}

type ErrorResponse = {
  success: false
  error: string
  json: Record<string, unknown>
}

type SearchBooksResponse = SuccessResponse | ErrorResponse

export async function searchBooks(
  term = 'harry+potter',
  page = 0
): Promise<SearchBooksResponse> {
  const result = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${page}&maxResults=10`
  )

  if (!result.ok) {
    return {
      success: false,
      error: result.statusText,
      json: await result.json(),
    }
  }

  return { success: true, data: await result.json() }
}
