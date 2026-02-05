import { Product } from '@/lib/types';

export const products: Product[] = [
  // BUKET RUŽA - 999 RSD
  {
    id: 'buket-ruza',
    name: 'Buket ruža',
    category: 'BOX',
    price: 999,
    shortDesc: 'Elegantni buket svežih ruža u poklon kutiji sa prozorom. Izaberi boju!',
    description: 'Prekrasan buket ruža u elegantnoj poklon kutiji sa transparentnim prozorom. Spremno za poklon - ne zahteva dodatno pakovanje. Savršen poklon za Dan zaljubljenih i sve posebne prilike. Izaberi svoju omiljenu boju!',
    features: [
      'Poklon kutija sa prozorom',
      'Aranžman svežih ruža',
      'Izbor boja: plava, crvena, roze, ljubičasta',
      'Spremno za poklon',
      'Premium izgled',
      'Idealno za 14. februar',
    ],
    images: [
      '/products/roze crvena ljubicasta1.png',
      '/products/mnogo ruza.png',
      '/products/2x3 ruze.png',
    ],
    colorVariants: [
      {
        color: '#f43f5e',
        colorName: 'Crvena',
        images: ['/products/roze crvena ljubicasta1.png', '/products/mnogo ruza.png'],
      },
      {
        color: '#ec4899',
        colorName: 'Roze',
        images: ['/products/roze crvena ljubicasta2.png', '/products/2x3 ruze.png'],
      },
      {
        color: '#a855f7',
        colorName: 'Ljubičasta',
        images: ['/products/roze crvena ljubicasta1.png', '/products/roze crvena ljubicasta2.png'],
      },
      {
        color: '#3b82f6',
        colorName: 'Plava',
        images: ['/products/plave ruze 5x.png', '/products/mnogo ruza.png'],
      },
    ],
    badge: 'Akcija',
    sku: 'BOX-BUKET-001',
  },

  // SVETLEĆE RUŽE U KUPOLI - Svi proizvodi 1499 RSD
  {
    id: 'ruza-sa-srcem',
    name: 'Ruža u kupoli sa srcem',
    category: 'DOME',
    price: 1499,
    shortDesc: 'Crvena večna ruža sa LED svetlima i "Love" srcem u roze kutiji.',
    description: 'Romantična crvena ruža u staklenoj kupoli sa LED svetlima i dekorativnim srcem sa natpisom "Love". Dolazi u elegantnoj roze poklon kutiji spremnoj za poklanjanje. Radi na baterije i ne vene - poklon koji traje zauvek.',
    features: [
      'LED svetla (radi na baterije)',
      'Dekorativno srce "Love"',
      'Večna ruža - ne vene',
      'Premium poklon pakovanje',
      'Spremno za poklon',
    ],
    images: ['/products/ruza-srce-1.jpg'],
    badge: 'Najprodavanije',
    sku: 'DOME-LOVE-001',
  },
  {
    id: 'zlatna-ruza',
    name: 'Zlatna ruža u kupoli',
    category: 'DOME',
    price: 1499,
    shortDesc: 'Luksuzna zlatna ruža sa LED svetlima u staklenoj kupoli.',
    description: 'Spektakularna zlatna ruža u elegantnoj staklenoj kupoli sa LED osvetljenjem. Dolazi u premium roze poklon kutiji. Savršen luksuzni poklon koji ostavlja bez daha i traje zauvek.',
    features: [
      'LED svetla (radi na baterije)',
      'Zlatni listovi i ruža',
      'Večna ruža - ne vene',
      'Premium poklon pakovanje',
      'Spremno za poklon',
    ],
    images: ['/products/zlatna-ruza-1.jpg'],
    badge: 'Premium',
    sku: 'DOME-GOLD-001',
  },
  {
    id: 'crvena-ruza',
    name: 'Crvena ruža u kupoli',
    category: 'DOME',
    price: 1499,
    shortDesc: 'Klasična crvena večna ruža sa LED svetlima u staklenoj kupoli.',
    description: 'Prekrasna crvena ruža u staklenoj kupoli sa blagim LED osvetljenjem. Dolazi u elegantnoj roze poklon kutiji spremnoj za poklanjanje. Klasičan i romantičan poklon za Dan zaljubljenih.',
    features: [
      'LED svetla (radi na baterije)',
      'Klasična crvena ruža',
      'Večna ruža - ne vene',
      'Premium poklon pakovanje',
      'Spremno za poklon',
    ],
    images: ['/products/crvena-ruza-1.jpg'],
    sku: 'DOME-RED-001',
  },
];
