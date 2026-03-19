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
import { getProducts } from "./productApi"; 
import ProductCard from "../components/ui/ProductCard";
import CategoryFilter from "../components/ui/CategoryFilter";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) =>
    {
      setProducts(data);
    })
  }, []);

  return (
    <div>
      <div>
        <CategoryFilter />
      </div>
      <div className="bg-blue-200 p-2">
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