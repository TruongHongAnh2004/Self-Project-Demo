//trả về list sản phẩm 
export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await res.json();
  return data.products;
};

//trả về 1 sản phẩm duy nhất 
export const getProductById = async (id: string) => {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json());
}