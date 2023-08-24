import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Error from '../components/Error/Error'
import ChefDetails from '../components/chefDetails/ChefDetails';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch("https://server-farhan358.vercel.app/chefs")
      },
      {
        path: "/chefdetails/:id",
        element: <PrivateRoute>
          <ChefDetails/>
        </PrivateRoute>,
        loader : ({params}) => fetch(`https://server-farhan358.vercel.app/chefs/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog/>,
        loader: ()=>fetch('https://server-farhan358.vercel.app/blogs')
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Registration/>
      },
      {
        path: "/*",
        element: <Error/>,
        
      },
    ],
  },
]);

export default router;
