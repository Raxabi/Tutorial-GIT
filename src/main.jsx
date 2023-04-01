import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { PagesContextProvider } from "./context/usePages"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <PagesContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PagesContextProvider>
)