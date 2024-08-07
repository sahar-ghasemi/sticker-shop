import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainLayout from "./components/layouts/MainLayout";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  {path:"/products/:id",element:(<MainLayout><Product/></MainLayout>)},
//   {path:"/cart",element:(<MainLayout><Cart/></MainLayout>)}
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
        <ToastContainer/>
    </Provider>
  </React.StrictMode>
);
