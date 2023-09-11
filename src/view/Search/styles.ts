import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: grid;
  min-height: calc(100dvh - 160px);
  grid-template-columns: 1fr min(100%, ${props => props.theme.sizes.container}) 1fr;
  padding-left: ${props => props.theme.sizes[4]};
  padding-right: ${props => props.theme.sizes[4]};

  & > * {
    grid-column: 2;
  }
`

export const Content = styled.section`
  width: 100%;
  display: grid;
  gap: ${props => props.theme.sizes[8]};
  padding-top: ${props => props.theme.sizes[8]};
  padding-bottom: ${props => props.theme.sizes[8]};

  @media (min-width: ${props => props.theme.screens.desktop}) {
    grid-template-columns: 320px 1fr;
  }
`

export const ContentResults = styled.section`
  width: 100%;
  display: grid;
  gap: ${props => props.theme.sizes[6]};
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${props => props.theme.screens.tablet}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: ${props => props.theme.screens.desktop}) {
    grid-template-columns: repeat(auto-fill, min(1fr, 100%));
  }
`

export const ContentResultsWrapper = styled.article`
  width: 100%;
`

export const ContentResultsCover = styled.picture`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    background-color: #fafafa;
    aspect-ratio: 9 / 14;
  }
`

export const ContentResultsTitle = styled.div`
  label {
    font-size: 14px;
    color: #86878b;
  }
`

export const ContentResultData = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: ${props => props.theme.font.md};
    font-weight: 500;
    color: ${props => props.theme.colors.heading};
  }

  p {
    font-size: 14px;
    color: #9eaeb7;
  }
`
