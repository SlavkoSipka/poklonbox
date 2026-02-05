import emailjs from '@emailjs/browser';
import { OrderData } from './types';
import { formatPrice } from './utils';

export async function sendOrderEmail(order: OrderData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS nije pravilno konfigurisan. Proverite .env.local');
  }

  // Format items list for email
  const itemsList = order.items
    .map((item) => {
      const colorText = item.selectedColor ? ` (Boja: ${item.selectedColor})` : '';
      return `${item.product.name}${colorText} - Količina: ${item.quantity} - Cena: ${formatPrice(
        item.product.price * item.quantity
      )}`;
    })
    .join('\n');

  const templateParams = {
    order_number: order.orderNumber,
    customer_name: `${order.customer.firstName} ${order.customer.lastName}`,
    customer_phone: order.customer.phone,
    customer_email: order.customer.email,
    customer_address: order.customer.address,
    customer_city: order.customer.city,
    customer_postal: order.customer.postalCode,
    customer_note: order.customer.note || 'Nema napomene',
    items_list: itemsList,
    total_price: formatPrice(order.total),
    timestamp: new Date(order.timestamp).toLocaleString('sr-RS'),
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Greška pri slanju porudžbine. Pokušajte ponovo.');
  }
}
