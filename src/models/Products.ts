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
import product11 from '../assets/products/product11.jpg';
import product12 from '../assets/products/product12.jpg';
import product13 from '../assets/products/product13.jpg';
import product14 from '../assets/products/product14.jpg';
import product15 from '../assets/products/product15.jpg';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Organic Chamomile Tea',
    price: 9.99,
    imageUrl: product1,
  },
  {
    id: '2',
    name: 'Turmeric Supplement',
    price: 14.99,
    imageUrl: product2
  },
  {
    id: '3',
    name: 'Lavender Essential Oil',
    price: 19.99,
    imageUrl: product3
  },
  {
    id: '4',
    name: 'Ginger Root Supplement',
    price: 11.99,
    imageUrl: product4
  },
  {
    id: '5',
    name: 'Echinacea Extract',
    price: 24.99,
    imageUrl: product5
  },
  {
    id: '6',
    name: 'Peppermint Essential Oil',
    price: 12.99,
    imageUrl: product6
  },
  {
    id: '7',
    name: 'Milk Thistle Supplement',
    price: 16.99,
    imageUrl: product7
  },
  {
    id: '8',
    name: 'Gingko Biloba Supplement',
    price: 21.99,
    imageUrl: product8
  },
  {
      id: '9',
      name: 'Peppermint Tea',
      price: 8.99,
      imageUrl: product9
    },
    {
      id: '10',
      name: 'Valerian Root Supplement',
      price: 17.99,
      imageUrl: product10
    },
    {
      id: '11',
      name: 'Rosemary Essential Oil',
      price: 13.99,
      imageUrl: product11,
    },
    {
      id: '12',
      name: 'Saw Palmetto Supplement',
      price: 20.99,
      imageUrl: product12,
    },
    {
      id: '13',
      name: 'Maca Root Supplement',
      price: 22.99,
      imageUrl: product13,
    },
    {
      id: '14',
      name: 'Green Tea Extract',
      price: 18.99,
      imageUrl: product14,
    },
    {
      id: '15',
      name: 'Passionflower Supplement',
      price: 15.99,
      imageUrl: product15,
    },
];

export default products;