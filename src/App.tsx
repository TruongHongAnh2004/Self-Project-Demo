//import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import ProductListPage from "./page/ProductListPage";
// import ProductDetailPage from "./page/ProductDetailPage";
import { router } from "./router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;