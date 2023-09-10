import user from '@testing-library/user-event'
import { render, screen } from './utils'
import App from '../src/App'

test('user should search for book and see autocomplete suggestion', async () => {
  render(<App />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'Harry Potter')
  expect(search).toHaveValue('Harry Potter')
})
