import Filters from '../../components/filters'
import {
  Container,
  Content,
  ContentResultData,
  ContentResults,
  ContentResultsCover,
  ContentResultsWrapper,
} from './styles'

import { useBooks } from '../../hooks/use-books'
import { useFilters } from '../../hooks/use-filters'
import { BooksVolumes } from '../../mocks/data'
import { compose } from '../../utils'

function filterBySaleAvailability(filter: string[] = []) {
  return (data: BooksVolumes['items']) => {
    if (!filter.length) {
      return data
    }

    return data.filter(item => filter.includes(item.saleInfo.saleability))
  }
}

function filterByFormats(filters: string[] = []) {
  return (data: BooksVolumes['items']) => {
    if (!filters.length) {
      return data
    }

    return data.filter(item => {
      return item.accessInfo.epub.isAvailable && filters.includes('epub') || item.accessInfo.pdf.isAvailable && filters.includes('pdf')
    })
  }
}

function filterByPrice(filters: string[] = []) {
  return (data: BooksVolumes['items']) => {
    if (!filters.length) {
      return data
    }

    return data.filter(item => {
      if (item.saleInfo.listPrice) {
        return filters.some(value => {
          const [min, max] = value.split('-')

          return (item.saleInfo.listPrice?.amount ?? 0) >= Number(min) && (max ? (item.saleInfo.listPrice?.amount ?? 0) <= Number(max) : true)
        })
      }

      return false
    })
  }
}

const Search = () => {
  const { state, term, hasFilters, onChangeFilter } = useFilters();
  const { books, isLoading } = useBooks({ q: term, maxResults: 40 })

  if (isLoading) {
    return null
  }

  const composeFilters = compose([
    filterByFormats(state.formatos),
    filterBySaleAvailability(state.disponibilidade),
    filterByPrice(state.preco),
  ])

  const data = hasFilters ? composeFilters(books.items) : books.items;

  return (
    <Container>
      <Content>
        <Filters filters={state} onChange={onChangeFilter} mainTitle="Filtrar Resultados da busca:" />

        <ContentResults>
          {data.map(book => (
            <ContentResultsWrapper key={book.id}>
              <ContentResultsCover>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              </ContentResultsCover>
              <ContentResultData>
                <h3>{book.volumeInfo.title}</h3>
                {book.volumeInfo.authors ? <p>{book.volumeInfo.authors[0]}</p> : null}
              </ContentResultData>
            </ContentResultsWrapper>
          ))}
        </ContentResults>
      </Content>
    </Container>
  )
}

export default Search
