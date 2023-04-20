export interface VariationProps {
    id: number,
    size?: number | null, // allow only integer
    custom_size?: number | null,
    weight_type?: string | null,
    weight?: number | null,
    height_type?: string | null,
    height?: number | null,
    color?: string | null,
    colorName?: string | null,
    color_name?: string | null,
}

const variations: VariationProps[] = [
    {
        id: 1,
        size: 1,
        custom_size: null,
        weight_type: null,
        weight: null,
        height_type: null,
        height: null,
        color: null,
        colorName: null,
        color_name: null,
    },
    {
        id: 2,
        size: 2,
        custom_size: null,
        weight_type: null,
        weight: null,
        height_type: null,
        height: null,
        color: null,
        colorName: null,
        color_name: null,
    },
    {
        id: 3,
        size: null,
        custom_size: null,
        weight_type: null,
        weight: null,
        height_type: null,
        height: null,
        color: 'blue',
        colorName: 'Blue',
        color_name: null,
    }
];

export default variations;