import { useNavigate } from 'react-router-dom'
import { Container, Content, ContentSearch, ContentUser, Logo } from './styles'
import Search from '../search'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>

        <ContentSearch>
          <Search onSelectSuggestion={suggestion => navigate(`/busca?s=${suggestion}`)} />
        </ContentSearch>

        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  )
}

export default Header
