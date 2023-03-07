import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { MobileProvider } from './context/mobile.context'
import App from './App'

import './index.css'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
)
