import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import React from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Register from './components/Register/Register';
import People from './components/People/People';
import Login from './components/Login/Login';


const routers = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    { path: "home", element: <Home /> },
    { path: 'movies', element: <Movies /> },
    { path: 'series', element: <Series /> },
    { path: 'login', element: <Login /> },
    { index: true, element: <Register /> },
    { path: 'people', element: <People /> }
  ]
}])

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;



