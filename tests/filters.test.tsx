import user from '@testing-library/user-event'
import { render, screen } from './utils'
import Filter from '../src/components/filters'
import { vi } from 'vitest'

const defaultSelected = {
  preco: ['0-30'],
  disponibilidade: ['FOR_SALE'],
  formatos: ['epub']
}

test('should show suggestions after search', async () => {
  const fn = vi.fn()

  render(<Filter filters={defaultSelected} onChange={fn} mainTitle="Testing Filter" />)

  expect(screen.getByRole('checkbox', { name: 'de R$0 até R$30' })).toBeChecked()
  expect(screen.getByRole('checkbox', { name: 'Disponível' })).toBeChecked()
  expect(screen.getByRole('checkbox', { name: 'EPUB' })).toBeChecked()

  await user.click(screen.getByLabelText('de R$0 até R$30'))
  await user.click(screen.getByLabelText('Disponível'))
  await user.click(screen.getByLabelText('EPUB'))

  expect(fn).toHaveBeenCalledTimes(3);
})
