'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product, CartItem } from './types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeItem: (productId: string, selectedColor?: string, selectedSize?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string, selectedSize?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'pokloni-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (product: Product, quantity: number = 1, selectedColor?: string, selectedSize?: string) => {
    setItems((prev) => {
      // Check if same product with same color and size exists
      const existing = prev.find(
        (item) => 
          item.product.id === product.id && 
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && 
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor, selectedSize }];
    });
  };

  const removeItem = (productId: string, selectedColor?: string, selectedSize?: string) => {
    setItems((prev) => prev.filter((item) => 
      !(item.product.id === productId && 
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize)
    ));
  };

  const updateQuantity = (productId: string, quantity: number, selectedColor?: string, selectedSize?: string) => {
    if (quantity <= 0) {
      removeItem(productId, selectedColor, selectedSize);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && 
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
