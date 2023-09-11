import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

export const SearchContainer = styled.form`
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.sizes[2]};
  padding: 0 ${props => props.theme.sizes[4]};

  border-radius: ${props => props.theme.rounded.default};
  background-color: ${props => props.theme.colors.smoke};
  border: 1px solid ${props => props.theme.colors.gray};
  transition: border-color 0.1s ease-in;

  &:has(> [data-state='visible']) {
    border-radius: 25px 25px 0 0;
  }

  &:focus-within {
    border-color: ${props => props.theme.colors.carbon};

    [data-state='visible'] {
      border-color: ${props => props.theme.colors.carbon};
      border-top-color: transparent;
    }
  }
`

export const SearchSuggestions = styled.div`
  left: -1px;
  top: calc(100% - 1px);
  position: absolute;

  gap: 2px;
  display: flex;
  flex-direction: column;
  width: calc(100% + 2px);
  padding: ${props => props.theme.sizes[4]};

  border: 1px solid ${props => props.theme.colors.gray};
  border-top-color: transparent;
  background-color: ${props => props.theme.colors.smoke};
  border-radius: 0 0 25px 25px;
  transition: all 0.2s ease;
`

export const SearchSuggestionsItem = styled.button`
  padding: 6px 6px;

  text-align: left;
  font-weight: regular;
  color: ${props => props.theme.colors.heading};

  border: none;
  transition: all 0.2s ease;
  background-color: transparent;

  strong {
    font-weight: bold;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${props => props.theme.colors.white};
  }
`

export const InputSearch = styled.input`
  flex: 1;
  height: 48px;
  padding: ${({ theme }) => `${theme.sizes[2]} ${theme.sizes[2]}`};
  color: ${props => props.theme.colors.carbon};
  font-size: ${props => props.theme.font.md};

  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${props => props.theme.colors.carbon};
    opacity: 0.4;
  }
`

export const Icon = styled(SearchIcon)``
