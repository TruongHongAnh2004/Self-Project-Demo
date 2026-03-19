
export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    rating: number;
    thumbnail: string;
    discountPercentage: number;
    brand: string;
    images: string[];
    returnPolicy: string; // chinh sach hoan tra
}
export interface ProductCardAPI{
    products: Product[];
}
