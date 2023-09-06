import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

export const InputSearch = styled.input`
  background-color: #f1f7fc;
  border: 1px solid #dee1e6;
  outline: #dee1e6;
  line-height: 300%;
  font-size: 16px;
  font-weight: 400;
  cursor: default;
  color: #406a76;
  border-radius: 50px;
  padding: 0 16px;
  width: 100%;

  &:placeholder {
    color: #406a76;
    opacity: 0;
  }
`

export const Icon = styled(SearchIcon)`
  position: relative;
  right: 32px;

  @media (min-width: 992px) {
    right: 42px;
  }
`
