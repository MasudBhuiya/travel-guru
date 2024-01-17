import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      
    ]
  },
  {
    path: 'details/:id',
    element: <Details></Details>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
