'use client';

import { Suspense } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function ShopContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Svi pokloni
          </h1>
          <p className="text-gray-600 text-lg">
            Pronađi poklon koji će nekoga obradovati
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent"></div>
          </div>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
