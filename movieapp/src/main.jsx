import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MovieCompontent from './MovieCompontent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieCompontent />
  </StrictMode>,
)
