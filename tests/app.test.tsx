import { render, screen } from './utils'
import App from '../src/App'

test('should be true', () => {
  render(<App />)
  expect(screen.getByText(/aventura/i)).toBeInTheDocument();
})
