import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MobileProvider } from './context/mobile.context'

import App from './App'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MobileProvider>
  </React.StrictMode>
)
