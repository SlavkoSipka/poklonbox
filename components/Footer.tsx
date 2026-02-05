import { Heart, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-rose-50 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="text-xl font-serif font-semibold text-gray-900">
                Pokloni<span className="text-rose-500">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Poklon koji izgleda skupo. Spremno za poklanjanje.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-rose-500 transition"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 hover:text-rose-500 transition"
                >
                  Prodavnica
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-gray-600 hover:text-rose-500 transition"
                >
                  Korpa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@pokloni.rs</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+381 60 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Instagram className="w-4 h-4" />
                <span>@pokloni.rs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rose-100 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pokloni. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
