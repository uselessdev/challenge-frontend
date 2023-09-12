import { useNavigate } from 'react-router-dom'
import { Container, Content, ContentSearch, ContentUser, Logo } from './styles'
import Search from '../search'
import { useFilters } from '../../hooks/use-filters'

const Header = () => {
  const navigate = useNavigate()
  const { term } = useFilters()

  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>

        <ContentSearch>
          <Search search={term} onSelectSuggestion={suggestion => navigate(`/busca?s=${suggestion}`)} />
        </ContentSearch>

        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  )
}

export default Header
