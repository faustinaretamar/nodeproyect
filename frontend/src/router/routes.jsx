import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Pets from '../components/pets';
import ErrorComponent from '../error';
import App from '../App'
import GiveForAdoption from '../components/darAdopcion';
import { Dashboard } from '../components/dashboard';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
    errorElement: <ErrorComponent/>, 
    children: [
      { path: '/', element: <Pets/> }, 
      { path: '/darenadopcion', element: <GiveForAdoption/> }, 
      { path: '/contact', element: <></> },
      { path: '/dashboard', element: <Dashboard/>}
    ],
    
  },
]);
