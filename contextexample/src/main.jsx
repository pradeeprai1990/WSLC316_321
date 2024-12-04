import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './Rootlayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MainContext from './MainContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart.jsx'

let router=createBrowserRouter([
  {
    path:'/',
    element:<Rootlayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about-us',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
       <RouterProvider router={router}/>
    </MainContext>
  </StrictMode>,
)
