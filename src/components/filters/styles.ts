import styled from 'styled-components'

export const Content = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.sizes[8]};
  background-color: ${props => props.theme.colors.white};
  width: 100%;
`

export const ContentTitle = styled.p`
  color: ${props => props.theme.colors.filter};
  font-size: ${props => props.theme.font.md};
  font-weight: 700;
`

export const Button = styled.button`
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 16px;
  text-transform: uppercase;
  background-color: #adb7bf;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.sizes[2]};
`

export const FilterTitle = styled.p`
  color: ${props => props.theme.colors.filter};
  font-size: ${props => props.theme.font.sm};
  font-weight: 700;
`

export const FilterContent = styled.div`
  & > ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: ${props => props.theme.sizes[2]};
  }

  & label {
    display: flex;
    gap: ${props => props.theme.sizes[2]};
    margin-bottom: 3px;
  }

  & span {
    font-size: ${props => props.theme.font.md};
    color: #053b4b;
  }

  & input:checked + span {
    color: ${props => props.theme.colors.gray};
  }
`
