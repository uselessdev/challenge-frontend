import React from 'react'
import { Icon, InputSearch, SearchContainer } from './styles'
import { SearchProps } from './types'

const Search: React.FC<SearchProps> = ({ value }) => {
  return (
    <SearchContainer>
      <InputSearch type="text" value={value} placeholder="Pesquisar..." />
      <Icon />
    </SearchContainer>
  )
}

export default Search
