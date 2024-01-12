import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { rootRoute } from './routes/index.jsx';

const router = createBrowserRouter([
  rootRoute
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
