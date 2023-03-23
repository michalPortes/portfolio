import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { MobileProvider } from './context/mobile.context'
import { UserProvider } from './context/user.context'

import App from './App'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileProvider>
      <UserProvider>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </UserProvider>
    </MobileProvider>
  </React.StrictMode>
)
