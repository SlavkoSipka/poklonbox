export type ProductCategory = 'BOX' | 'DOME';

export interface ColorVariant {
  color: string;
  colorName: string;
  images: string[];
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
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string; // Npr. "Crvena", "Roze", etc.
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
