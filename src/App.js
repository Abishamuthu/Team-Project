



// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './Todos/Users';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState,useEffect } from 'react';


function App() {
  

  
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Users/>
    },
    
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        
        <RouterProvider router={router} />
    
        
      </header>
    </div>
  );
}

export default App;
