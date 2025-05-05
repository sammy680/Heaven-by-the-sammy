export interface Product {
  id: string;
  title: string;
  description?: string;
  price: string;
  image: string;
  imageSrc: string;
  category: string;
  tags: string[];
  descriptionHtml?: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  quantity: number;
  descriptionHtml?: string; // Match the casing with Product
}
export interface ProductType {
  [x: string]: string | undefined;
  id: number;
  name: string;
  image: string;
  price: string;
  quantity?: number;
}

