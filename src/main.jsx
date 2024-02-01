import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Homepage from './componets/Homepage/Homepage';
import Roots from './Roots';
import Details from './componets/Movies/Details';
import Login from './componets/Login/Login';






const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
    
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:'/detail/:id',
        element:<Details></Details>
      },
      {
        path:'/login',
        element:<Login></Login>
      }




    ]
  },
]);




















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
  <RouterProvider router={router} />
  </div>

</React.StrictMode>
)

