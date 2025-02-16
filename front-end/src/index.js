import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './dashboard/Dashboard';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Login',
    element: <Login />
  },

  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
