import { useEffect, useState } from "react";
import "./App.css";
import type { Product } from "./types/type";
import ProductList from "./features/ProductList";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products.map((prod: any) => ({
            id: prod.id,
            title: prod.title,
            price: prod.price,
            rating: prod.rating,
            image: prod.thumbnail,
            returnPolicy: prod.returnPolicy,
            discountPercentage: prod.discountPercentage,
            
          })
        )
      )
      });
  }, []);
  return (
    <div>
        <ProductList products={products} />
      </div>
      
    
  );
}

export default App;
