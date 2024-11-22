import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'


createRoot(document.getElementById('root')).render(
<div>
    <Home/>
    <About/>
</div>

 
)
