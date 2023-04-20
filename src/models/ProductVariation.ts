import variations, { VariationProps } from "./Variations";

export interface ProductVariationProps {
    id: number,
    product_id: number,
    variation_id: number,
    variation: VariationProps
}


const product_variations: ProductVariationProps[] = [
    {
        id: 1,
        product_id: 1,
        variation_id: 1,
        variation: variations[0]
    },{
        id: 2,
        product_id: 1,
        variation_id: 2,
        variation: variations[1]
    },{
        id: 3,
        product_id: 1,
        variation_id: 3,
        variation: variations[2]
    }
];

export default product_variations;