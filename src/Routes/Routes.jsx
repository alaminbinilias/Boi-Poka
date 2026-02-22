import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';
import BookDetails from '../Components/BookDetails/BookDetails';
import Error from '../Components/Error/Error';

const router= createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/BookDetails/:id',
        Component:BookDetails,
        errorElement:<Error></Error>
      }
    ]
  }
])

export default router;