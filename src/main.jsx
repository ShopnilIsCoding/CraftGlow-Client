import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Providers/AuthProvider';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Add from './Pages/Add';
import MyList from './Pages/MyList';
import All from './Pages/All';
import ItemDetails from './Components/ItemDetails';
import PrivateRoutes from './Routes/PrivateRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/added')

      },
      {
        path:'/all',
        element:<All></All>,
        loader:()=>fetch('http://localhost:3000/added')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/add',
        element:<PrivateRoutes><Add></Add></PrivateRoutes>
      },
      {
        path:'/:email',
        element:<PrivateRoutes><MyList></MyList></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/added/${params.email}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/details/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
