import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Home from './Pages/Home.jsx'
import MainContext from './MainContext.jsx'
import Cart from './Pages/Cart.jsx'
import 'react-toastify/dist/ReactToastify.css';
let allRoutes = createBrowserRouter(
  [
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
    <MainContext>
      <RouterProvider router={allRoutes}/>
    </MainContext>
  
)
