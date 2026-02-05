import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-6">
          <Search className="w-10 h-10 text-rose-500" />
        </div>
        <h1 className="font-serif text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Stranica nije pronađena
        </h2>
        <p className="text-gray-600 mb-8">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition"
        >
          <Home className="w-5 h-5" />
          <span>Nazad na početnu</span>
        </Link>
      </div>
    </div>
  );
}
