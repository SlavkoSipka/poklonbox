'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ProductCategory } from '@/lib/types';
import { Search } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>(
    categoryParam || 'ALL'
  );
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    const sorted = [...filtered];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Prodavnica
          </h1>
          <p className="text-gray-600">
            Pronađi savršen poklon za Dan zaljubljenih
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pretraži proizvode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategorija
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'ALL')}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="ALL">Sve kategorije</option>
                <option value="BOX">Buket ruža</option>
                <option value="DOME">Svetleće večne ruže</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sortiraj
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="name">Naziv</option>
                <option value="price-asc">Cena: rastuće</option>
                <option value="price-desc">Cena: opadajuće</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === 'ALL'
                  ? 'bg-rose-500 text-white'
                  : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
              }`}
            >
              Svi proizvodi
            </button>
            <button
              onClick={() => setSelectedCategory('BOX')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === 'BOX'
                  ? 'bg-rose-500 text-white'
                  : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
              }`}
            >
              Buket ruža
            </button>
            <button
              onClick={() => setSelectedCategory('DOME')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === 'DOME'
                  ? 'bg-rose-500 text-white'
                  : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
              }`}
            >
              Svetleće večne ruže
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Prikazano <span className="font-semibold">{filteredAndSortedProducts.length}</span>{' '}
            {filteredAndSortedProducts.length === 1 ? 'proizvod' : 'proizvoda'}
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Nema proizvoda koji odgovaraju vašim filterima.
            </p>
          </div>
        )}
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
