import { useState } from 'react';
import {
  Icon,
  InputSearch,
  SearchContainer,
  SearchSuggestions,
  SearchSuggestionsItem
} from './styles'
import { useSearch } from '../../hooks/use-search';

function highlightTerm(text: string, highlight = '') {
  if (highlight.length <= 0) {
    return text;
  }

  return text.replace(new RegExp(`(${highlight})`, 'gi'), '<strong>$1</strong>')
}

const Search = () => {
  const { term, onChangeSearchTerm, suggestions } = useSearch()
  const [visible, setVisible] = useState(true)

  return (
    <SearchContainer>
      <InputSearch
        value={term}
        onChange={onChangeSearchTerm}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
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
              dangerouslySetInnerHTML={{ __html: highlightTerm(suggestion.title, term) }}
            />
          ))}
        </SearchSuggestions>
      ) : null}
    </SearchContainer>
  )
}

export default Search
