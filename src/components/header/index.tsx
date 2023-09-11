import { Container, Content, ContentSearch, ContentUser, Logo } from './styles'
import Search from '../search'

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>

        <ContentSearch>
          <Search />
        </ContentSearch>

        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  )
}

export default Header
