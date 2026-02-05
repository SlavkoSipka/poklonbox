import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100/50 hover:border-rose-200"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-500 transition line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {product.shortDesc}
        </p>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
