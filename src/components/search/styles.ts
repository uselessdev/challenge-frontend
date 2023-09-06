import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.sizes[2]};
  padding: 0 ${props => props.theme.sizes[4]};

  border-radius: ${props => props.theme.rounded.default};
  background-color: ${props => props.theme.colors.smoke};
  border: 1px solid ${props => props.theme.colors.gray};
  transition: border-color 0.1s ease-in;

  &:focus-within {
    border-color: ${props => props.theme.colors.carbon};
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
