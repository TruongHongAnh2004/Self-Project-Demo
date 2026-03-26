// import CategoryFilter from "../components/ui/CategoryFilter";
// import ProductCard from "../components/ui/ProductCard";
// import SearchInput from "../components/ui/SearchInput";
// import type { ProductCardAPI } from "../types/type";

// function ProductList(props: ProductCardAPI) {
//   return (
//     <div>
//       <div className="bg-pink-300 py-2.5 px-1">
//         <SearchInput />
//       </div>

//       <div>
//         <CategoryFilter />
//       </div>

//       <div className=" bg-blue-200 p-2">
//         <p className="text-xl font-bold">Tất cả sản phẩm</p>
//         <div className="flex flex-wrap justify-center gap-5 p-6">
//           {props?.products.map((p, i) => (
//             <ProductCard key={i} {...p} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
//export default ProductList;

import { useEffect } from "react";
import { getProducts } from "./productApi";
import ProductCard from "../components/ui/ProductCard";
import CategoryFilter from "../components/ui/CategoryFilter";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setBrands, setProducts, setSort } from "./productSlice";


function ProductList() {
  //render → fetch data → filter/sort lại.
  const search = useSelector((state: RootState) => state.products.search);
  const products = useSelector((state: RootState) => state.products.products);
  const sort = useSelector((state: RootState) => state.products.sort);
  const brands = useSelector((state: RootState) => state.products.brands);

  const dispatch = useDispatch(); 
  const filteredProducts = products
    .filter((p) => {
      if (!search || typeof search != "string") return true;
      return p.title.toLowerCase().includes(search.toLowerCase());
    })
    .filter(
      (p) => brands.length === 0 || brands.includes(p.brand.toUpperCase()),
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(); // gọi API lấy danh sách sản phẩm xong
      dispatch(setProducts(data)); //Cập nhật kho dữ liệu chung
    };

    fetchData(); // redux update -> render (product có data)
  }, [dispatch]);

  return (
    <div className="flex gap-4">
      <CategoryFilter
        onSelect={(b) => dispatch(setBrands(b))}
        onSortChange={(s) => dispatch(setSort(s))}
      />

      <div className="bg-blue-100 p-2 flex-1">
        <p className="text-xl font-bold">Tất cả sản phẩm</p>

        <div className="flex flex-wrap justify-center gap-5 p-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
