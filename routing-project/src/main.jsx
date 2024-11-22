import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let allRouter=createBrowserRouter(
  [
    {
      path:"/",   //http://localhost:5173/,
      element:<Home/>
    },
    {
      path:'/about-us', // http://localhost:5173/about-us,
      element:<About/>
    },
    {
      path:'/course', //http://localhost:5173/course
      element:<Course/>
    }
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={allRouter} />
  </StrictMode>,
)
