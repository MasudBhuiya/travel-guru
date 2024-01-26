import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Details from './components/Details/Details';
import AuthProvider from './components/Provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactForm from './components/Contact/ContactForm';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      
    ]
  },
  {
    path: 'details/:id',
    element: <PrivateRoute><Details></Details></PrivateRoute>,
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'contact',
    element: <ContactForm></ContactForm>
  },
  {
    path: 'about',
    element: <About></About>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
