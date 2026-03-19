export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await res.json();
  return data.products;
};