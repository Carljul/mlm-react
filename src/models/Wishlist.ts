import { Product } from "./Products";
import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';
import product4 from '../assets/products/product4.jpg';
import product5 from '../assets/products/product5.jpg';
import product6 from '../assets/products/product6.jpg';
import product7 from '../assets/products/product7.jpg';
import product8 from '../assets/products/product8.jpg';
import product9 from '../assets/products/product9.jpg';
import product10 from '../assets/products/product10.jpg';

export interface WishListItemProps {
    store_id: number,
    store_name: string,
    product_id: number,
    product: Product
}

const wishes: WishListItemProps[] = [
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 1,
        product: {
            id: 1,
            name: "Organic Fertilizer",
            price: 15.99,
            imageUrl: product1,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 2,
        product: {
            id: 2,
            name: "Herbal Shampoo",
            price: 9.99,
            imageUrl: product2,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 3,
        product: {
            id: 3,
            name: "Natural Conditioner",
            price: 12.99,
            imageUrl: product3,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 4,
        product: {
            id: 4,
            name: "Aloe Vera Gel",
            price: 7.99,
            imageUrl: product4,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 5,
        product: {
            id: 5,
            name: "Organic Fertilizer Plus",
            price: 19.99,
            imageUrl: product5,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 1,
        product: {
            id: 6,
            name: "Herbal Facial Cleanser",
            price: 14.99,
            imageUrl: product6,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 7,
        product: {
            id: 7,
            name: "Natural Body Wash",
            price: 8.99,
            imageUrl: product7,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 8,
        product: {
            id: 8,
            name: "Organic Compost",
            price: 12.99,
            imageUrl: product8,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 1,
        product: {
            id: 9,
            name: "Herbal Hair Oil",
            price: 11.99,
            imageUrl: product9,
        }
    },
    {
        store_id: 1,
        store_name: 'Organico',
        product_id: 1,
        product: {
            id: 10,
            name: "Natural Insect Repellent",
            price: 6.99,
            imageUrl: product10,
        }
    },
];

export default wishes;