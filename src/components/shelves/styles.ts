import styled from 'styled-components'

export const Container = styled.main``

export const Shelf = styled.section`
  width: 100%;
  display: grid;
  gap: ${props => props.theme.sizes[4]};
  grid-template-columns: 1fr min(${props => props.theme.sizes.container}, 100%) 1fr;

  & > *:not(:nth-of-type(3)) {
    grid-column: 2;
  }
`

export const ContentList = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: calc(100dvw - ${props => props.theme.sizes[4]});

  display: flex;
  gap: ${props => props.theme.sizes[8]};
  flex-direction: column;
  justify-content: flex-start;
  padding-top: ${props => props.theme.sizes[8]};
  padding-bottom: ${props => props.theme.sizes[8]};

  &:nth-child(3) {
    display: grid;
    grid-column: 1 / 4;
    grid-template-columns:
      1fr min(${props => props.theme.sizes.container}, 100%)
      1fr;
    background-color: #daf6f3;
    gap: ${props => props.theme.sizes[4]};
    max-width: 100dvw;

    & > * {
      grid-column: 2;
    }
  }
`

export const TitleCategory = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.colors.heading};
  font-size: ${props => props.theme.font.md};
`

export const Content = styled.div`
  width: 100%;
`

export const ContentItem = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 9 / 14;
  }
`
