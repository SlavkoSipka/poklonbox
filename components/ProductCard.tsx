import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Check if product has sizes (for teddies)
  const isTeddy = product.category === 'TEDDY';
  const lowestPrice = product.sizes ? Math.min(...product.sizes.map(s => s.price)) : product.price;
  
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100/50 hover:border-rose-200"
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 ${isTeddy ? 'aspect-square' : 'aspect-[3/4]'}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`${isTeddy ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
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
            {product.sizes ? `Od ${formatPrice(lowestPrice)}` : formatPrice(product.price)}
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
