'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';
import { Suspense, useEffect } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderNumber = searchParams.get('order') || 'N/A';

  // Auto redirect to home after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hvala na porudžbini!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Vaša porudžbina je uspešno primljena i uskoro ćemo Vas kontaktirati.
          </p>

          {/* Order Number */}
          <div className="bg-rose-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Broj porudžbine:</p>
            <p className="text-2xl font-bold text-gray-900 font-mono">{orderNumber}</p>
          </div>

          {/* Next Steps */}
          <div className="text-left mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">Šta dalje?</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Primili smo Vašu porudžbinu i poslali email potvrdu
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Javićemo Vam se u najkraćem roku radi potvrde i detalja dostave
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Nakon potvrde, šaljemo Vaš poklon brzom poštom
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">
              Imate pitanja? Kontaktirajte nas:
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:infopoklonbox@gmail.com" className="hover:text-rose-500 transition">
                  infopoklonbox@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+381613091583" className="hover:text-rose-500 transition">
                  061 309 1583
                </a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Nazad na početnu</span>
            </Link>
            <p className="text-center text-sm text-gray-500">
              Automatski vraćanje za 10 sekundi...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Učitavam...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
