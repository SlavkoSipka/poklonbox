'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Heart, ShoppingBag } from 'lucide-react';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <span className="text-xl font-serif font-semibold text-gray-900">
              Pokloni<span className="text-rose-500">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-rose-500 transition"
            >
              Početna
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-gray-700 hover:text-rose-500 transition"
            >
              Prodavnica
            </Link>
          </nav>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-rose-50 transition group"
          >
            <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-rose-500 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
