import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  gap: ${props => props.theme.sizes[4]};
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.sizes[4]};

  background-color: ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.gray};
`

export const ContainerContent = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.container};
  display: flex;
  gap: ${props => props.theme.sizes[4]};
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.screens.desktop}) {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`

export const Content = styled.section`
  display: inline-flex;
  background-color: ${props => props.theme.colors.white};
`

export const ContentText = styled.p`
  font-size: ${props => props.theme.font.sm};
  color: ${props => props.theme.colors.text};
`

export const ContentList = styled.ul`
  list-style: none;
  flex-direction: column;
  display: inline-flex;
  gap: ${props => props.theme.sizes[2]};
  font-size: ${props => props.theme.font.md};

  @media (min-width: ${props => props.theme.screens.desktop}) {
    flex-direction: row;
  }
`

export const ContentItem = styled.li`
  text-align: center;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: ${props => `${props.theme.sizes[3]} ${props.theme.sizes[4]}`};
  border-radius: ${props => props.theme.sizes[3]};

  &:hover,
  &:focus-within {
    border-color: #86878b;
  }
`

export const ContentLink = styled.a`
  outline: none;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: #86878b;
  }
`
