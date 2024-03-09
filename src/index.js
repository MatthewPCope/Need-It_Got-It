import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import  {createRoot}  from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext'

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </AuthContextProvider>
  </React.StrictMode>,
)

