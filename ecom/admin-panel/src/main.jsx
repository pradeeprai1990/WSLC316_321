import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import RootLayout from './RootLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'

let router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard/>,
         
        },
        {
          path:'dashboard',
          children:[
          {
            path:'profile',
            element:<Profile/>
          }
         ]
        }
        
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
