import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Rootlayout from './Rootlayout'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'

let allRouter=createBrowserRouter(
  [
    {
      path:'/',
      element:<Rootlayout/>,
      children:[
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
          element:<Course/>,
        },
        {
          path:'/product', //http://localhost:5173/course
          element:<Product/>
        },
        {
          path:'/product-details/:pid', //http://localhost:5173/course
          element:<ProductDetails/>
        },
        {
          path:'/contact-us', //http://localhost:5173/course
          element:<ContactUs/>
        },
        
      ]
    },
    {
      path:'/login',
      element:<Login/>
    }

    
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      {/* <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path="/" element={<Rootlayout />}>
                  <Route path='/' element={<Home/>} />
                  <Route path='/course' element={<Course/>} />
              </Route>
           </Routes>
      </BrowserRouter> */}


     <RouterProvider router={allRouter} />
  </StrictMode>,
)
