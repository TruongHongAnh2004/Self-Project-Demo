  import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
  import type { Product } from "../types/type";

  // export interface Product {
  //   id: number;
  //   title: string;
  //   price: number;
  //   brand: string;
  //   description: string;
  //   rating: number;
  //   thumbnail: string;
  //   discountPercentage: number;
  //   images: string[];
  //   returnPolicy: string;
  // }

  export interface ProductState {
    products: Product[];
    search: string;
    brands: string[];
    sort: "" | "asc" | "desc";
  };

  const initialState: ProductState = {
    products: [],
    search: "",
    brands: [],
    sort: "",
  };

  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setProducts: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
      setSearch: (state, action: PayloadAction<string>) => {
        state.search = action.payload;
      },
      setBrands: (state, action: PayloadAction<string[]>) => {
        state.brands = action.payload;
      },
      setSort: (state, action: PayloadAction<"" | "asc" | "desc">) => {
        state.sort = action.payload;
      },
    },
  });

  export const { setProducts, setSearch, setBrands, setSort } =
    productSlice.actions;

  export default productSlice.reducer;
