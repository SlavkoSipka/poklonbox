'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/utils';
import { generateOrderNumber } from '@/lib/utils';
import { sendOrderEmail } from '@/lib/email';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Wait for client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    note: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Only redirect on client side
  if (isClient && items.length === 0) {
    router.push('/cart');
    return null;
  }

  // Show loading while checking cart
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent"></div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ime je obavezno';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Prezime je obavezno';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon je obavezan';
    } else if (!/^[+\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Neispravan format telefona';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Neispravan format email-a';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Adresa je obavezna';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Grad je obavezan';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Poštanski broj je obavezan';
    } else if (!/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Poštanski broj mora imati 5 cifara';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Molimo popunite sva obavezna polja');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderNumber = generateOrderNumber();
      const orderData = {
        customer: formData,
        items,
        total: totalPrice,
        timestamp: new Date().toISOString(),
        orderNumber,
      };

      await sendOrderEmail(orderData);

      // Clear cart and redirect to success
      clearCart();
      router.push(`/success?order=${orderNumber}`);
    } catch (error) {
      console.error('Order error:', error);
      toast.error('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Poručivanje
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 mb-6">
                <h2 className="font-semibold text-gray-900 mb-6">Podaci za dostavu</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ime *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.firstName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prezime *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.lastName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+381 60 123 4567"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ime@email.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresa *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Ulica i broj"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.address
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grad *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.city
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poštanski broj *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="11000"
                      maxLength={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.postalCode
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 focus:ring-rose-500'
                      }`}
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
                    )}
                  </div>

                  {/* Note */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Napomena (opciono)
                    </label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dodatne napomene za porudžbinu..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Važne informacije
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Plaćanje pouzećem ili uplatom nakon potvrde</li>
                  <li>• Javićemo Vam se telefonom ili email-om za potvrdu</li>
                  <li>• Dostava u roku od 2-5 radnih dana</li>
                  <li>• Svi proizvodi dolaze spremni za poklon</li>
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 sticky top-24">
                <h2 className="font-semibold text-gray-900 mb-4">Vaša porudžbina</h2>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item, index) => (
                    <div key={`${item.product.id}-${item.selectedColor || 'default'}-${index}`} className="flex gap-3">
                      <div className="relative w-16 h-20 bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </p>
                        {item.selectedColor && (
                          <p className="text-xs text-rose-600">Boja: {item.selectedColor}</p>
                        )}
                        <p className="text-sm text-gray-500">Količina: {item.quantity}</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Proizvodi</span>
                    <span className="font-semibold">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dostava</span>
                    <span className="text-sm text-rose-500">Po dogovoru</span>
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Šaljem porudžbinu...</span>
                    </>
                  ) : (
                    <span>Poruči</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
