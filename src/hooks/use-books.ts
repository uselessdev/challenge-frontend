import { useQuery } from 'react-query'
import { searchBooks } from '../api/search'
import { BooksVolumes } from '../mocks/data'

export function useBooks(category: string) {
  const { data, isLoading, status } = useQuery({
    queryKey: ['FETCH_LATEST_BOOKS', category],
    queryFn: () =>
      searchBooks({
        category,
        maxResults: 10,
      }),
  })

  const books = (isLoading ? {} : data) as BooksVolumes

  return { books, status, isLoading }
}

function mapBooksIntoCategories(books: BooksVolumes) {
  return books.items.map(book => ({
    id: book.id,
    title: book.volumeInfo.title,
    urlImage: book.volumeInfo.imageLinks?.thumbnail,
  }))
}

export function useFeaturedBooks() {
  const adventure = useBooks('adventure')
  const fiction = useBooks('fiction')
  const featured = useBooks('love')
  const action = useBooks('action')

  return [
    {
      id: 1,
      name: 'Aventura',
      books: adventure.isLoading ? [] : mapBooksIntoCategories(adventure.books),
    },
    {
      id: 2,
      name: 'Ficção',
      books: fiction.isLoading ? [] : mapBooksIntoCategories(fiction.books),
    },
    {
      id: 3,
      name: 'Destaque',
      books: featured.isLoading ? [] : mapBooksIntoCategories(featured.books),
    },
    {
      id: 4,
      name: 'Ação',
      books: action.isLoading ? [] : mapBooksIntoCategories(action.books),
    },
  ]
}
