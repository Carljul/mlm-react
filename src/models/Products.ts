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

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Fertilizer",
    price: 15.99,
    imageUrl: product1,
  },
  {
    id: 2,
    name: "Herbal Shampoo",
    price: 9.99,
    imageUrl: product2,
  },
  {
    id: 3,
    name: "Natural Conditioner",
    price: 12.99,
    imageUrl: product3,
  },
  {
    id: 4,
    name: "Aloe Vera Gel",
    price: 7.99,
    imageUrl: product4,
  },
  {
    id: 5,
    name: "Organic Fertilizer Plus",
    price: 19.99,
    imageUrl: product5,
  },
  {
    id: 6,
    name: "Herbal Facial Cleanser",
    price: 14.99,
    imageUrl: product6,
  },
  {
    id: 7,
    name: "Natural Body Wash",
    price: 8.99,
    imageUrl: product7,
  },
  {
    id: 8,
    name: "Organic Compost",
    price: 12.99,
    imageUrl: product8,
  },
  {
    id: 9,
    name: "Herbal Hair Oil",
    price: 11.99,
    imageUrl: product9,
  },
  {
    id: 10,
    name: "Natural Insect Repellent",
    price: 6.99,
    imageUrl: product10,
  },
];

export default products;