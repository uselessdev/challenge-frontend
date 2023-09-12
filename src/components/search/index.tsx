import { useRef, useState } from 'react';
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

type Props = {
  search: string
  onSelectSuggestion: (value: string) => void
}

const Search = ({ onSelectSuggestion, search = '' }: Props) => {
  const { term, onChangeSearchTerm, suggestions, setTerm } = useSearch(search)
  const [visible, setVisible] = useState(false)
  const searchRef = useRef(null)

  useClickOutside({
    ref: searchRef,
    handler: () => setVisible(false)
  })

  const handleClick = (name: string) => {
    setVisible(false)
    onSelectSuggestion(name)
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
