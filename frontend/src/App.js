import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/home'
import AllCities from './pages/allcities'
import Test from './pages/test'

function App() {
  const router = createBrowserRouter([
    {
      // parent route
      element: <Layout />,
      // child routes
      // child elements will replace <outlet/>
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/allcities",
          element: <AllCities />
        },
        {
          path: "/test",
          element: <Test />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
