import React, { useState } from 'react'
import { Container, Content, ContentSearch, ContentUser, Logo } from './styles'

import Search from '../search'

const Header: React.FC = () => {
  const [term, setTerm] = useState('')

  return (
    <Container>
      <Content>
        <div>
          <a href="/">
            <Logo />
          </a>
        </div>

        <ContentSearch>
          <Search value={term} />
        </ContentSearch>

        <ContentUser>
          <p>login</p>
        </ContentUser>
      </Content>
    </Container>
  )
}

export default Header
