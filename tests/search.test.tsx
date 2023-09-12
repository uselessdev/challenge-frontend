import { vi } from 'vitest'
import user from '@testing-library/user-event'
import { render, screen } from './utils'
import Search from '../src/components/search'

test('should show suggestions after search', async () => {
  render(<Search search="" onSelectSuggestion={() => {}} />)

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'fundação')

  expect(search).toHaveValue('fundação')

  const results = screen.getByRole('button', { name: /fundação e império/i })
  expect(results).toBeVisible()
})

test('should close suggestions on click outside', async () => {
  render(
    <div>
      <span>outside</span>
      <Search search="" onSelectSuggestion={() => {}} />
    </div>
  )

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'fundação')

  const results = screen.getByRole('button', { name: /fundação e império/i })

  await user.click(screen.getByText(/outside/i))

  expect(results).not.toBeInTheDocument()
})

test('should click in suggestion item', async () => {
  const fn = vi.fn()

  render(
    <Search search="" onSelectSuggestion={fn} />
  )

  const search = screen.getByPlaceholderText('Pesquisar...')
  await user.type(search, 'fundação')

  const results = screen.getByRole('button', { name: /fundação e império/i })

  await user.click(results)

  expect(fn).toHaveBeenCalled()
})
