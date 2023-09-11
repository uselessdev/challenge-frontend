import Filters from '../../components/filters'
import {
  Container,
  Content,
  ContentResultData,
  ContentResults,
  ContentResultsCover,
  ContentResultsWrapper,
} from './styles'

import { books } from '../../components/shelves/constants'

const Search: React.FC = () => {
  return (
    <Container>
      <Content>
        <Filters mainTitle="Filtrar Resultados da busca:" />

        <ContentResults>
          {books.map(shelf => (
            <>
              {shelf.booksShelf.map(book => (
                <ContentResultsWrapper>
                  <ContentResultsCover>
                    <img src={book.urlImage} alt={book.slug} />
                  </ContentResultsCover>
                  <ContentResultData>
                    <h3>{book.title}</h3>
                    <p>{book.autor}</p>
                  </ContentResultData>
                </ContentResultsWrapper>
              ))}
            </>
          ))}
        </ContentResults>
      </Content>
    </Container>
  )
}

export default Search
