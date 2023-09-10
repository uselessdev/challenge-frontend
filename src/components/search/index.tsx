import { Icon, InputSearch, SearchContainer } from './styles'
import { SearchProps } from './types'


const Search = ({ value, onChange }: SearchProps) => {
  return (
    <SearchContainer>
      <InputSearch
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Pesquisar..."
      />
      <Icon />
    </SearchContainer>
  )
}

export default Search
