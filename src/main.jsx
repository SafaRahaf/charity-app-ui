import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';

import AuthProvider from './AuthProvider';

import News from './News';
import Contect from './Contect';

import Main from './layout/Main';

import Register from './pages/Register';
import Home from './pages/Home'
import About from './pages/About';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/news", 
        element: <News/>,
      },
      {
        path: "/contect",
        element: <Contect/>,
      },

      {
        path: "/users/signin",
        element: <Login/>,
      },
      {
        path: "/users/signup",
        element: <Register/>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
document.getElementById('root')
);
