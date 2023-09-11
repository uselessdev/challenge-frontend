import Shelves from '../../components/shelves'
import { useFeaturedBooks } from '../../hooks/use-books'

function Home() {
  const books = useFeaturedBooks()

  return <Shelves shelves={books} />
}

export default Home
