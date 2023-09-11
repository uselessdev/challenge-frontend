import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Icon,
  InputSearch,
  SearchContainer,
  SearchSuggestions,
  SearchSuggestionsItem
} from './styles'
import { useSearch } from '../../hooks/use-search';
import { useClickOutside } from '../../hooks/use-clickoutside';

function highlightTerm(text: string, highlight = '') {
  if (highlight.length <= 0) {
    return text;
  }

  return text.replace(new RegExp(`(${highlight})`, 'gi'), '<strong>$1</strong>')
}

const Search = () => {
  const { term, onChangeSearchTerm, suggestions, setTerm } = useSearch()
  const [visible, setVisible] = useState(true)
  const searchRef = useRef(null)

  useClickOutside({
    ref: searchRef,
    handler: () => setVisible(false)
  })

  const navigate = useNavigate()

  const handleClick = (name: string) => {
    setVisible(false)
    navigate(`/busca?s=${name}`)
  }

  return (
    <SearchContainer ref={searchRef}>
      <InputSearch
        value={term}
        onChange={onChangeSearchTerm}
        onFocus={() => setVisible(true)}
        type="text"
        placeholder="Pesquisar..."
      />
      <Icon />

      {visible && suggestions.length > 0 ? (
        <SearchSuggestions data-state="visible">
          {suggestions.map(suggestion => (
            <SearchSuggestionsItem
              type="button"
              key={suggestion.id}
              onClick={() => {
                handleClick(suggestion.title)
                setTerm(suggestion.title)
              }}
              dangerouslySetInnerHTML={{ __html: highlightTerm(suggestion.title, term) }}
            />
          ))}
        </SearchSuggestions>
      ) : null}
    </SearchContainer>
  )
}

export default Search
