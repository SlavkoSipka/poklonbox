'use client';

import { use, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import { ArrowLeft, Check, ShoppingBag, Zap } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import QuantityControl from '@/components/QuantityControl';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) {
    notFound();
  }

  // Use color variant images if available, otherwise use default images
  const displayImages = product.colorVariants
    ? product.colorVariants[selectedColorIndex].images
    : product.images;

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedImage(0); // Reset to first image when color changes
  };

  const handleAddToCart = () => {
    const selectedColorName = product.colorVariants
      ? product.colorVariants[selectedColorIndex].colorName
      : undefined;
    
    addItem(product, quantity, selectedColorName);
    
    const colorText = selectedColorName ? ` (${selectedColorName})` : '';
    toast.success(`Dodato u korpu: ${product.name}${colorText}`, {
      icon: '🛍️',
    });
  };

  const handleBuyNow = () => {
    const selectedColorName = product.colorVariants
      ? product.colorVariants[selectedColorIndex].colorName
      : undefined;
    
    addItem(product, quantity, selectedColorName);
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Nazad na prodavnicu</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[3/4] mb-4 bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl overflow-hidden">
              <Image
                src={displayImages[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-rose-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {displayImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {displayImages.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx
                        ? 'border-rose-500'
                        : 'border-transparent hover:border-rose-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{product.shortDesc}</p>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            {/* Color Variants */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div className="mb-8">
                <h2 className="font-semibold text-gray-900 mb-3">Izaberi boju</h2>
                <div className="flex flex-wrap gap-3">
                  {product.colorVariants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleColorChange(idx)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition ${
                        selectedColorIndex === idx
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-200'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: variant.color }}
                      />
                      <span className="font-medium text-gray-900">{variant.colorName}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-900 mb-3">Opis</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-900 mb-3">Karakteristike</h2>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-semibold text-gray-900 mb-3">Količina</label>
              <QuantityControl
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => q - 1)}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Dodaj u korpu</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl"
              >
                <Zap className="w-5 h-5" />
                <span>Kupi odmah</span>
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-rose-50 rounded-2xl p-6">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Spremno za poklon:</strong> Svaki
                proizvod dolazi u premium pakovanju, spreman za poklanjanje. Brza dostava
                brzom poštom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
