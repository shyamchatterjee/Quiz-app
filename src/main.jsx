import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { ContextFuntion } from './context/context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextFuntion>
<App />
  </ContextFuntion>
 
    
   
  </StrictMode>,
)
