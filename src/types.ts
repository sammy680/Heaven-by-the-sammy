// Global types for your application

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: 'admin' | 'user'; // Optional role type for differentiation
}

// Product related types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  ratings?: number; // Optional: Product rating, if applicable
  discountPrice?: number; // Optional: Discounted price if available
}

// CartItem type: Represents a single item in the cart
export interface CartItem {
  productId: string;
  quantity: number;
}

// Context related types for Auth, Cart, and Wishlist
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface WishlistContextType {
  items: string[]; // Array of product ids that are in the wishlist
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
}

// Firebase related types (assuming you're integrating Firebase for auth and database)
export interface FirebaseContextType {
  createUser: (email: string, password: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  getUserData: (userId: string) => Promise<User | null>;
}

// Product Review type (if you have a product review system)
export interface Review {
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Address type for checkout page or user profile
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

// Order related types
export interface Order {
  orderId: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'canceled';
  shippingAddress: Address;
  orderDate: string;
  deliveryDate?: string; // Optional, only if available
}

