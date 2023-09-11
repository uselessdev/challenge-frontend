import * as React from 'react'
import { useSearchParams } from 'react-router-dom'
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

const Search = () => {
  const [params] = useSearchParams()
  const term = params.get('s')

  const { books, isLoading } = useBooks({ q: term ?? '', maxResults: 40 })

  if (isLoading) {
    return null
  }

  return (
    <Container>
      <Content>
        <Filters mainTitle="Filtrar Resultados da busca:" />

        <ContentResults>
          {books.items.map(book => (
            <ContentResultsWrapper key={book.id}>
              <ContentResultsCover>
                <img width="240px" height="360px" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
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
