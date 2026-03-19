
export interface Product{
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    discountPercentage: number;
    returnPolicy: string; // chinh sach hoan tra
}
export interface ProductCardAPI{
    products: Product[];
}
