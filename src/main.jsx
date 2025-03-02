import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './features/auth'
import App from './App'

import '@mantine/core/styles.css';

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => console.error(error))
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => console.error(error))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
