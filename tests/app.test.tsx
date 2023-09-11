import user from '@testing-library/user-event'
import { render, screen, fireEvent } from './utils'
import Search from '../src/components/search'

test('should show suggestions after search', async () => {
  render(<Search />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'Harry Potter')

  expect(search).toHaveValue('Harry Potter')

  const results = screen.getByRole('button', { name: /harry potter e a ordem da fênix/i })
  expect(results).toBeVisible()
})

test('should close suggestions on blur', async () => {
  render(<Search />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'Harry Potter')

  const results = screen.getByRole('button', { name: /harry potter e a ordem da fênix/i })

  fireEvent.blur(search)
  expect(results).not.toBeInTheDocument()
})
