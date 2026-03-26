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

//sắp xếp sản phẩm tăng dần 
export const getProductBySort = async (order: "asc" | "desc") => {
  const res = await fetch(`https://dummyjson.com/products/category/smartphones?sortBy=price&order=${order}`)
    const data = await res.json();
    return data.products;
};


// //sắp xếp theo brand
// export const getProductByCategory = async (brand: string) => {
//   const res = await fetch(`https://dummyjson.com/products/search?q=${brand}`);
//   const data = await res.json();
//   return data.products;
// };

//tìm kiếm trên thanh 
export const getProductBySearch = async (search: string) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
  const data = await res.json();
  return data.products;
}
