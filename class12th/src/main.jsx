import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import LoginContext from "./LoginContext.jsx"
createRoot(document.getElementById('root')).render(
  <LoginContext>
    
    <App />
  </LoginContext>

  )
