import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkmodeContextProvider } from './context/Context.jsx'
import { AuthContextProvider } from './context/Authcontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
        
    </DarkmodeContextProvider>

  </React.StrictMode>,
)
