import styled from 'styled-components'
import { ReactComponent as WhiteLogo } from '../../assets/logo.svg'

export const Container = styled.header`
  width: 100%;
  padding: ${props => props.theme.sizes[4]};
  background-color: ${props => props.theme.colors.green};
`

export const Content = styled.section`
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
  }
`

export const ContentSearch = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.screens.desktop}) {
    max-width: 70%;
  }
`

export const ContentUser = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.screens.desktop}) {
    display: block;
  }
`

export const Logo = styled(WhiteLogo)`
  height: 25px;
`
