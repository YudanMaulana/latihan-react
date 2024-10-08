import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/App.jsx'
import './index.css'
import Person from './components/Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Person />
  </StrictMode>,
)
