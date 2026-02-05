'use client';

import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import QuantityControl from '@/components/QuantityControl';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Vaša korpa je prazna
            </h1>
            <p className="text-gray-600 mb-8">
              Dodajte proizvode u korpu da biste nastavili sa kupovinom
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition"
            >
              <span>Idi na prodavnicu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Korpa
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedColor || 'default'}-${index}`}
                className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="relative w-full sm:w-32 aspect-[3/4] bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          href={`/product/${item.product.id}`}
                          className="font-semibold text-gray-900 hover:text-rose-500 transition"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.product.shortDesc}
                        </p>
                        {item.selectedColor && (
                          <p className="text-sm font-medium text-rose-600 mt-1">
                            Boja: {item.selectedColor}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-rose-500 transition"
                        aria-label="Ukloni iz korpe"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <QuantityControl
                        quantity={item.quantity}
                        onIncrease={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        onDecrease={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      />
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {formatPrice(item.product.price * item.quantity)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-sm text-gray-500">
                            {formatPrice(item.product.price)} × {item.quantity}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-4">Pregled porudžbine</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Proizvodi ({items.length})</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Dostava</span>
                  <span className="text-rose-500 font-medium">Izračunava se</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Ukupno</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-rose-500 text-white text-center px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl mb-4"
              >
                Nastavi na poručivanje
              </Link>

              <Link
                href="/shop"
                className="block w-full text-center text-gray-600 hover:text-rose-500 transition"
              >
                Nastavi kupovinu
              </Link>

              <div className="mt-6 bg-rose-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Napomena:</strong> Plaćanje se vrši
                  pouzećem ili uplatom nakon potvrde porudžbine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
