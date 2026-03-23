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

import { useEffect, useState } from "react";
import type { Product } from "../types/type";
import { getProductByCategory, getProductBySearch, getProductBySort, getProducts } from "./productApi"; 
import ProductCard from "../components/ui/ProductCard";
import CategoryFilter from "../components/ui/CategoryFilter";
import { useOutletContext } from "react-router-dom";

type OutletContextType = {
  search: string;
};
function ProductList() {

  const { search } = useOutletContext<OutletContextType>();
  const [products, setProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState<"asc" | "desc" | "">("");
  const [brand, setBrand] = useState<string>("");

  //hiển thị tất cả sản phẩm, filter brand, price, search 
 useEffect(() => {
    const fetchData = async () => {
      let data;

      if (brand) {
        data = await getProductByCategory(brand);
      } else if (sort) {
        data = await getProductBySort(sort);
      } else if(search) {
        data = await getProductBySearch(search);
      }
      else {
        data = await getProducts();
      }

      setProducts(data);
    };

    fetchData();
  }, [sort, brand, search]);



  return (
     <div className="flex gap-4">
      <CategoryFilter 
        onSelect={(b) => setBrand(b)}
        onSortChange={(s) => setSort(s)}
      />

      <div className="bg-blue-100 p-2 flex-1">
        <p className="text-xl font-bold">Tất cả sản phẩm</p>

        <div className="flex flex-wrap justify-center gap-5 p-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;