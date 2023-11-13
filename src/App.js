import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Todos/Users';
import{
  CreateBrowserRouter,
  Routerprovider,
}from "react-router-dom";
function App(){
  const router=CreateBrowserRouter([
    {
      path:"/",
   element:<Users/>
    }
  ])
  return(
    <div className='App'>
      <header className="App-Header">
      <RouterProvider router={router} />
      </header>
    </div>
  )
}

export default App;