import { CategoryProps } from "./Categories";

export interface ProductDetailProps {
    id: number,
    category_id: number,
    category: CategoryProps,
    name: string,
    description?: string,
    price: number,
    imageUrl: string,
    isCashOnDelivery: boolean | false,
    isFreeDelivery: boolean | false
}