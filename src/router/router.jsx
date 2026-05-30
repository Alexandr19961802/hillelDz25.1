import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import About from "../pages/About";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "product/:id", element: <Product /> },
        { path: "cart", element: <Cart /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  {
    basename: "/hillelDz25.1",
  }
);