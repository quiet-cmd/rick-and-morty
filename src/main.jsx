import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './features/auth'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App'

import '@mantine/core/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <MantineProvider>
            <App />
          </MantineProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
