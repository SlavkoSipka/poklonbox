export type ProductCategory = 'BOX' | 'DOME' | 'TEDDY';

export interface ColorVariant {
  color: string;
  colorName: string;
  images: string[];
}

export interface SizeOption {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  shortDesc: string;
  description: string;
  features: string[];
  images: string[];
  badge?: string;
  variants?: string[];
  colorVariants?: ColorVariant[];
  sizes?: SizeOption[]; // Veličine za medvediće
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string; // Npr. "Crvena", "Roze", etc.
  selectedSize?: string; // Npr. "Mali", "Srednji", "Veliki"
}

export interface OrderData {
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    note?: string;
  };
  items: CartItem[];
  total: number;
  timestamp: string;
  orderNumber: string;
}
