// Define the Product type
export interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  price: string;
  imageSrc: string;
}

// src/types.ts

export interface CartItem {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  quantity: number;
}
