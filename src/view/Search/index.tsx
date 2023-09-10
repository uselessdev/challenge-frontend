import React from 'react'
import Header from '../../components/header'
import Filters from '../../components/filters'
import {
  Container,
  Content,
  ContentResultData,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from './styles'
import Footer from '../../components/footer'
import {
  footerAllrightsReserved,
  helpLink,
  privacyAndPolicy,
  termsAndUsage,
} from '../../constants'
import { books } from '../../components/shelves/constants'

const Search: React.FC = () => {
  return (
    <>
      <Header />

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

      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </>
  )
}

export default Search
