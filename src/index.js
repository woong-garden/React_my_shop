import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Allproducts from "./pages/Allproducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, path: '/', element: <Home /> },
    { path: '/products', element: <Allproducts /> },
    { path: '/products/new', element: <ProtectedRoute requireAdmin>
                                        <NewProduct />
                                      </ProtectedRoute>},
    { path: '/products/:id', element: <ProductDetail />},
    { path: '/carts', element: <ProtectedRoute>
                                <MyCart />
                              </ProtectedRoute>},
  ] 
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
