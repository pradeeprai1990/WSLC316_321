import { createRoot } from 'react-dom/client';
import './index.css';
import RootLayOut from './RootLayOut';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContext from './MainContext';
import Products from './pages/Products';
import Cart from './Cart';
let createRoute = createBrowserRouter([
  {
    path: '/',
    element: <RootLayOut />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/cart/:pid',
        element: <Cart />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <MainContext>
    <RouterProvider router={createRoute}></RouterProvider>
  </MainContext>
);
