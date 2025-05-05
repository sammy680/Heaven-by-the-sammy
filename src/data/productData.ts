export interface ProductDataType {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductData: ProductDataType[] = [
  {
    id: '1',
    title: 'Classic Oversized Tee',
    category: 'T-Shirts',
    image: '/images/products/tshirt1.jpg',
    price: 1499,
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Urban Street Hoodie',
    category: 'Hoodies',
    image: '/images/products/hoodie1.jpg',
    price: 2499,
    isNew: true,
  },
  {
    id: '3',
    title: 'Slim Fit Cargo Pants',
    category: 'Bottoms',
    image: '/images/products/cargo1.jpg',
    price: 2199,
  },
  {
    id: '4',
    title: 'Distressed Denim Jacket',
    category: 'Outerwear',
    image: '/images/products/jacket1.jpg',
    price: 2999,
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Chic Crop Top',
    category: 'Tops',
    image: '/images/products/croptop1.jpg',
    price: 1299,
    isNew: true,
  },
];

export default ProductData;
