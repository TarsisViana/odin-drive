import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from './App.jsx'
import ErrorPage from './routes/Errorpage.jsx';
import Index from './routes/Index.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

