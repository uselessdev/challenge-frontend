import {
  Container,
  Content,
  ContentItem,
  ContentList,
  Shelf,
  TitleCategory,
} from './styles'
import { settings } from '../carousel/constants'
import Carousel from '../carousel'

type Props = {
  shelves: Array<{
    id: number;
    name: string;
    books: Array<{
      title: string;
      id: string;
      urlImage?: string;
    }>
  }>
}

const Shelves = ({ shelves }: Props) => {
  return (
    <Container>
      <Shelf>
        {shelves.map(shelf => {
          return (
            <ContentList key={shelf.id}>
              <TitleCategory key={shelf.id}>
                {shelf.name}
              </TitleCategory>
              <Content>
                <Carousel settings={settings}>
                  {shelf.books.map(book => (
                    <ContentItem key={book.title}>
                      <img src={book.urlImage} alt={book.title} height="295px" width="190px" />
                    </ContentItem>
                  ))}
                </Carousel>
              </Content>
            </ContentList>
          )
        })}
      </Shelf>
    </Container>
  )
}

export default Shelves
