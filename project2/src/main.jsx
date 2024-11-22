import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeComponent from './pages/HomeComponent.jsx'
import AboutCompontent from './pages/AboutCompontent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutCompontent/>
  </StrictMode>,
)
