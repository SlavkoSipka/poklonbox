import Link from 'next/link';
import { ArrowRight, Gift, Heart, Sparkles, Truck } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import StructuredData from '@/components/StructuredData';

export default function HomePage() {
  const bestsellers = products.filter((p) => p.badge === 'Najprodavanije');
  const featured = products.slice(0, 4);

  // Structured data for organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PoklonBox',
    url: 'https://poklonbox.rs',
    logo: 'https://poklonbox.rs/logo.png',
    description: 'Premium pokloni za Dan zaljubljenih - ruže, medvedići od ruža i svetleće večne ruže',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RS',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+381-61-309-1583',
      email: 'infopoklonbox@gmail.com',
      contactType: 'Customer Service',
    },
    sameAs: [],
  };

  // Structured data for website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PoklonBox',
    url: 'https://poklonbox.rs',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://poklonbox.rs/shop?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="min-h-screen">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 fill-rose-600" />
              <span>Posebno za 14. februar</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Poklon koji izgleda{' '}
              <span className="text-rose-500">skupo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Elegantne ruže u kutijama i svetleće večne ruže u kupoli.
              <br className="hidden md:block" />
              Spremno za poklanjanje. Poruči danas — pošaljemo brzom poštom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl"
              >
                <span>Pogledaj ponudu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/shop?category=DOME"
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition border border-gray-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Svetleće ruže</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box Category */}
            <Link
              href="/shop?category=BOX"
              className="group relative bg-gradient-to-br from-rose-100 to-rose-50 rounded-3xl p-8 hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative z-10">
                <Gift className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  Buket ruža
                </h3>
                <p className="text-gray-600 mb-4">
                  Elegantni buketi sa aranžmanom ruža
                </p>
                <span className="inline-flex items-center space-x-2 text-rose-500 font-semibold group-hover:space-x-3 transition-all">
                  <span>Pogledaj</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-200 rounded-full -mb-16 -mr-16 opacity-20"></div>
            </Link>

            {/* Dome Category */}
            <Link
              href="/shop?category=DOME"
              className="group relative bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  Svetleće večne ruže
                </h3>
                <p className="text-gray-600 mb-4">
                  Ruže u kupoli sa LED svetlima koja traju zauvek
                </p>
                <span className="inline-flex items-center space-x-2 text-amber-600 font-semibold group-hover:space-x-3 transition-all">
                  <span>Pogledaj</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-full -mb-16 -mr-16 opacity-20"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Najpopularniji pokloni
            </h2>
            <p className="text-gray-600">
              Naša selekcija najlepših poklona za Dan zaljubljenih
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-rose-500 font-semibold hover:space-x-3 transition-all"
            >
              <span>Vidi sve proizvode</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Brza dostava
              </h3>
              <p className="text-sm text-gray-600">
                Poruči danas — pošaljemo brzom poštom
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Gift className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Spremno za poklon
              </h3>
              <p className="text-sm text-gray-600">
                Svaki proizvod dolazi u premium pakovanju
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Premium kvalitet
              </h3>
              <p className="text-sm text-gray-600">
                Pokloni koji izgledaju skupo i luksuzno
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
