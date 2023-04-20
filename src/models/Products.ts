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
import { StoreProps } from './Store';
import { ProductDetailProps } from './ProductDetails';
import { StockProps } from './Stocks';
import categories from './Categories';
import ratings, { RatingProps } from './Ratings';
import product_variations, { ProductVariationProps } from './ProductVariation';

export interface Product {
    id: number,
    store_id: number,
    product_details_id: number,
    variation_id?: number | null,
    stocks_id: number,
    store: StoreProps,
    details: ProductDetailProps,
    variations?: ProductVariationProps[] | null,
    stock: StockProps,
    ratings: RatingProps[],
    isFavorite: boolean | false
}

const products: Product[] = [
  {
    id: 1,
    store_id: 1,
    product_details_id: 1,
    variation_id: null,
    stocks_id: 1,
    store: {
      id: 1,
      name: 'Store 1',
      user_id: 1
    },
    details: {
      id: 1,
      category_id: 1,
      category: categories[1],
      name: 'Organic Fertilizer',
      description: 'This is a sample of a description that I want to display in the screen. Maybe we can tweek this',
      price: 15.99,
      imageUrl: product1,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: [...product_variations.filter(element => element.product_id === 1)],
    stock: {
      id: 1,
      stock: 10
    },
    ratings: [...ratings.filter(element => element.product_id === 1)],
    isFavorite: true
  },
  {
    id: 2,
    store_id: 1,
    product_details_id: 2,
    variation_id: null,
    stocks_id: 2,
    store: {
      id: 1,
      name: 'Store 1',
      user_id: 1
    },
    details: {
      id: 2,
      category_id: 1,
      category: categories[1],
      name: 'Herbal Shampoo',
      description: 'This is a sample of Herbal Shampoo\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 9.99,
      imageUrl: product2,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 2,
      stock: 15
    },
    ratings: [...ratings.filter(element => element.product_id === 2)],
    isFavorite: true
  },
  {
    id: 3,
    store_id: 2,
    product_details_id: 3,
    variation_id: null,
    stocks_id: 3,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 3,
      category_id: 1,
      category: categories[1],
      name: 'Natural Conditioner',
      description: 'This is a sample of Natural Conditioner\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 12.99,
      imageUrl: product3,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 3,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 4,
    store_id: 2,
    product_details_id: 4,
    variation_id: null,
    stocks_id: 4,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 4,
      category_id: 1,
      category: categories[1],
      name: 'Aloe Vera Gel',
      description: 'This is a sample of Aloe Vera Gel\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 7.99,
      imageUrl: product4,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 4,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 5,
    store_id: 2,
    product_details_id: 5,
    variation_id: null,
    stocks_id: 5,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 5,
      category_id: 1,
      category: categories[1],
      name: 'Organic Fertilizer Plus',
      description: 'This is a sample of Organic Fertilizer Plus\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 19.99,
      imageUrl: product5,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 5,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 6,
    store_id: 2,
    product_details_id: 6,
    variation_id: null,
    stocks_id: 6,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 6,
      category_id: 1,
      category: categories[1],
      name: 'Herbal Facial Cleanser',
      description: 'This is a sample of Herbal Facial Cleanser\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 14.99,
      imageUrl: product6,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 6,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 7,
    store_id: 2,
    product_details_id: 7,
    variation_id: null,
    stocks_id: 7,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 7,
      category_id: 1,
      category: categories[1],
      name: 'Natural Body Wash',
      description: 'This is a sample of Natural Body Wash\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 8.99,
      imageUrl: product7,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 7,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 8,
    store_id: 2,
    product_details_id: 8,
    variation_id: null,
    stocks_id: 8,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 8,
      category_id: 1,
      category: categories[1],
      name: 'Organic Compost',
      description: 'This is a sample of Organic Compost\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 12.99,
      imageUrl: product8,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 8,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 9,
    store_id: 2,
    product_details_id: 9,
    variation_id: null,
    stocks_id: 9,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 9,
      category_id: 1,
      category: categories[1],
      name: 'Herbal Hair Oil',
      description: 'This is a sample of Herbal Hair Oil\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 11.99,
      imageUrl: product9,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 9,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  },
  {
    id: 10,
    store_id: 2,
    product_details_id: 10,
    variation_id: null,
    stocks_id: 10,
    store: {
      id: 2,
      name: 'Store 2',
      user_id: 1
    },
    details: {
      id: 10,
      category_id: 1,
      category: categories[1],
      name: 'Natural Insect Repellent',
      description: 'This is a sample of Natural Insect Repellent\'s description that I want to display in the screen. Maybe we can tweek this',
      price: 6.99,
      imageUrl: product10,
      isCashOnDelivery: false,
      isFreeDelivery: false
    },
    variations: null,
    stock: {
      id: 10,
      stock: 10
    },
    ratings: [],
    isFavorite: false
  }
];

export default products;