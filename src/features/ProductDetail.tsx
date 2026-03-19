import { useEffect, useState } from "react";
import Smartphone from "../components/ui/Smartphone";
import type { Product } from "../types/type";
import { getProductById } from "./productApi";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <Smartphone {...product} />
    </div>
  );
}

export default ProductDetail;
