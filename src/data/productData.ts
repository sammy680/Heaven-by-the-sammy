// src/data/ProductData.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  rating: number;
  reviews: number;
}

export const productData: Product[] = [
  {
    id: '1',
    name: 'Men\'s T-Shirt',
    category: 'Clothing',
    description: 'Comfortable cotton t-shirt in various sizes.',
    price: 29.99,
    imageUrl: '/images/products/tshirt1.jpg',
    stock: 100,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: '2',
    name: 'Women\'s Dress',
    category: 'Clothing',
    description: 'Stylish and elegant dress for any occasion.',
    price: 49.99,
    imageUrl: '/images/products/dress1.jpg',
    stock: 50,
    rating: 4.7,
    reviews: 85,
  },
  {
    id: '3',
    name: 'Running Shoes',
    category: 'Footwear',
    description: 'Lightweight and comfortable running shoes for men.',
    price: 79.99,
    imageUrl: '/images/products/shoes1.jpg',
    stock: 30,
    rating: 4.8,
    reviews: 200,
  },
  // Add more products as needed
];

export const getProductById = (id: string): Product | undefined => {
  return productData.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return productData.filter(product => product.category === category);
};
