import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProductListPage from "../page/ProductListPage";
import ProductDetailPage from "../page/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  // layout cha
    children: [
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);