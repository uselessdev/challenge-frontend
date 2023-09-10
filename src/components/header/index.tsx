import { Container, Content, ContentSearch, ContentUser, Logo } from './styles'

import Search from '../search'
import { useSearch } from '../../hooks/use-search'

const Header = () => {
  const { term, onChangeSearchTerm } = useSearch()

  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>

        <ContentSearch>
          <Search onChange={onChangeSearchTerm} value={term} />
        </ContentSearch>

        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  )
}

export default Header
