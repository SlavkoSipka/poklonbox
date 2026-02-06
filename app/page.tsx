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
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: "url('/products/hero (1).png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-rose-50/50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 fill-rose-600" />
              <span>Savršeno za rođendane, godišnjice, 14. februar ili „samo zato"</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Poklon koji se <span className="text-rose-500">pamti</span>
            </h1>
            <div className="text-base md:text-lg text-gray-700 mb-8 space-y-4 text-left max-w-2xl mx-auto">
              <p className="leading-relaxed">
                Ne poklanjaj samo stvar. Pokloni osećaj.
              </p>
              <p className="leading-relaxed">
                Znaš onaj trenutak kad se neko nasmeje čim otvori poklon? E baš takve trenutke pravimo mi.
              </p>
              <p className="leading-relaxed">
                Na PoklonBox-u biraš poklone koji govore „mislim na tebe", „volim te" i „poseban/posebna si" — bez komplikovanja.
              </p>
              <p className="leading-relaxed font-medium text-gray-900">
                Sve je već spremno za poklanjanje. Ti samo izabereš, mi šaljemo brzo na tvoju adresu.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl"
              >
                <span>Pogledaj poklone</span>
                <ArrowRight className="w-5 h-5" />
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
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  Buket ruža
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ne moraš da ideš u cvećaru. Ovaj buket dolazi već lepo upakovan — spreman da izmami osmeh čim se poklon otvori.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Mali gest koji ostavlja veliki utisak.
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
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  Svetleće večne ruže
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ovo nisu obične ruže. Večne ruže u kupoli sa nežnim LED svetlima prave toplu, romantičnu atmosferu i ostaju kao uspomena dugo nakon poklanjanja.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Idealno za nekoga ko voli detalje, svetlucave momente i poklone koji traju.
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
              Izdvajamo za tebe
            </h2>
            <p className="text-gray-600 text-lg">
              Pokloni koji su uvek dobar izbor
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
              <span>Vidi sve poklone</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Zašto PoklonBox?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Gift className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                Spremno za poklanjanje
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sve već lepo upakovano. Ne moraš ništa da dodaješ — poklon dolazi spreman.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                Brza isporuka
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Naručiš danas, šaljemo sutra. Poklon stiže brzo, upravo kad ti treba.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                Pokloni koji izazivaju emociju
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Jednostavna porudžbina — bez stresa. Samo izabereš i narucis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
