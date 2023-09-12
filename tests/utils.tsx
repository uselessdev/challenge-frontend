import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from '../src/theme'

const client = new QueryClient()

const Providers = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const renderer = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react';
export { renderer as render };
