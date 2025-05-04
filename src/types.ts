export interface Product {
  id: string;
  title: string;
  descriptionHtml?: string;
  price: string;
  imageSrc: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  quantity: number;
  descriptionHtml?: string; // Match the casing with Product
}
