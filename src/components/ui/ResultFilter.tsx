import { useEffect, useState } from "react";
import type { Product } from "../../types/type";
import { getProducts } from "../../features/productApi";
import CategoryFilter from "./CategoryFilter";

function ResultFilter() {
  const [products, setProducts] = useState<Product[]>([]);
  const [keyword, setKeyword] = useState<string>(""); //dành cho danh mục lọc
  

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // lọc theo hãng
  const filtered = keyword
  ? products.filter((p) =>
      p.title.toLowerCase().includes(keyword.toLowerCase())
    )
  : [];

  return (
   
      <div className="grid grid-cols-4 gap-4">
        <CategoryFilter onSelect={setKeyword} />

        <div className="col-span-3 bg-gray-100 p-4 rounded-xl">
          {keyword ? (
            <>
              <h1 className="text-xl font-bold mb-4">Kết quả: {keyword}</h1>

              <ul className="space-y-2">
                {filtered.map((p) => (
                  <li key={p.id} className="p-2 bg-white rounded">
                    {p.title}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-400 text-center mt-10">
              Chọn danh mục bạn yêu thích
            </p>
          )}
        </div>
      </div>
   
  );
}
export default ResultFilter;
