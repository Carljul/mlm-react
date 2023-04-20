import { ProductDetailProps } from "./ProductDetails";

export interface WishListItemProps {
    store_id: number,
    store_name: string,
    product_id: number,
    product: ProductDetailProps
}