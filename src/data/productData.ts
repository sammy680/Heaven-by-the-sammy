// src/data/productData.ts

export interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  price: string;
  imageSrc: string;
}

export const dummyProducts: Product[] = [
  {
    id: "1",
    title: "Luxury White Shirt",
    descriptionHtml: "<p>100% Cotton luxury shirt for everyday elegance.</p>",
    price: "129.00",
    imageSrc: "/images/products/shirt1.jpg",
  },
  {
    id: "2",
    title: "Luxury Black Hoodie",
    descriptionHtml: "<p>Premium quality hoodie for a luxury lifestyle.</p>",
    price: "69.99",
    imageSrc: "https://via.placeholder.com/400x400.png?text=Black+Hoodie",
  },
  {
    id: "3",
    title: "Designer Denim Jacket",
    descriptionHtml: "<p>Stylish denim jacket with modern detailing.</p>",
    price: "149.99",
    imageSrc: "https://via.placeholder.com/400x400.png?text=Denim+Jacket",
  },
];
