import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppWithProviders } from './providers.tsx'

// if (!import.meta.env.PROD) {
//   const { worker } = await import('./mocks/browser.ts');
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
)
