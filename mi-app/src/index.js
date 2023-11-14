import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import Menu from './Menu';
import Factura from './Factura';
import Producto from './Producto';
import AgregarProducto from './AgregarProducto';
import AgregarFactura from './AgregarFactura';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "main",
    element: <Main/>
  },
  {
    path: "menu",
    element: <Menu/>
  },
  {
    path: "factura",
    element: <Factura/>
  },
  {
    path: "producto",
    element: <Producto/>
  },
  {
    path: "agregarProducto",
    element: <AgregarProducto/>
  },
  {
    path: "agregarFactura",
    element: <AgregarFactura/>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
