import user from '@testing-library/user-event'
import { render, screen, fireEvent } from './utils'
import Search from '../src/components/search'

test('should show suggestions after search', async () => {
  render(<Search />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'fundação')

  expect(search).toHaveValue('fundação')

  const results = screen.getByRole('button', { name: /fundação e império/i })
  expect(results).toBeVisible()
})

test('should close suggestions on blur', async () => {
  render(<Search />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'fundação')

  const results = screen.getByRole('button', { name: /fundação e império/i })

  fireEvent.blur(search)
  expect(results).not.toBeInTheDocument()
})
