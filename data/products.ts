import { Product } from '@/lib/types';

export const products: Product[] = [
  // BUKET RUŽA - 999 RSD
  {
    id: 'buket-ruza',
    name: 'Buket ruža',
    category: 'BOX',
    price: 999,
    shortDesc: 'Lepo upakovan buket koji odmah izmami osmeh. Izaberi boju koja ti se sviđa.',
    description: 'Ne moraš da ideš u cvećaru. Ovaj buket dolazi već lepo upakovan — spreman da izmami osmeh čim se poklon otvori. Izaberi boju, dodaj poruku i imaš poklon koji izgleda pažljivo birano, čak i kad kupuješ u poslednjem trenutku. Mali gest koji ostavlja veliki utisak.',
    features: [
      'Spremno za poklon',
      'Izbor boja: plava, crvena, roze, ljubičasta',
      'Lepo upakovano',
      'Idealno za rođendane i godišnjice',
      'Savršeno za Dan zaljubljenih',
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
    shortDesc: 'Kad želiš da kažeš „volim te" bez mnogo reči.',
    description: 'Crvena večna ruža, nežna svetla i malo srce unutra — spoj koji momentalno budi emociju. Savršen izbor za romantične prilike i posebne osobe. Poklon koji govori umesto tebe.',
    features: [
      'LED svetla na baterije',
      'Dekorativno srce "Love"',
      'Večna ruža koja ne vene',
      'Spremno za poklanjanje',
      'Idealno za romantične prilike',
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
    shortDesc: 'Za one trenutke kada želiš nešto drugačije.',
    description: 'Zlatna ruža simbolizuje pažnju, zahvalnost i posebnost. Sa diskretnim svetlima u staklenoj kupoli, ovo je poklon koji se izdvaja i ostaje kao lepa dekoracija u prostoru.',
    features: [
      'LED svetla na baterije',
      'Zlatni listovi i ruža',
      'Večna ruža koja ne vene',
      'Spremno za poklanjanje',
      'Jedinstvena i elegantna',
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
    shortDesc: 'Jednostavno. Romantično. Bezvremensko.',
    description: 'Crvena večna ruža sa svetlima je klasik koji uvek prolazi — bilo da poklanjaš partneru, simpatiji ili dragoj osobi. Mali znak pažnje koji pravi veliku razliku.',
    features: [
      'LED svetla na baterije',
      'Klasična crvena ruža',
      'Večna ruža koja ne vene',
      'Spremno za poklanjanje',
      'Uvek dobar izbor',
    ],
    images: ['/products/crvena-ruza-1.jpg'],
    sku: 'DOME-RED-001',
  },

  // MEDVEDIĆI OD RUŽA - 3 veličine
  {
    id: 'plavi-meda',
    name: 'Plavi medvedić od ruža',
    category: 'TEDDY',
    price: 1799, // Cena za malog
    shortDesc: 'Drugačiji, moderan i baš poseban. Za one koji vole da se izdvoje iz mase.',
    description: 'Plavi meda je poklon za one koji vole da se izdvoje iz mase. Predstavlja poverenje, stabilnost i mir — savršen izbor za nekog ko ti mnogo znači. Dostupan u 3 veličine.',
    features: [
      'Napravljen od mini ruža',
      '3 veličine: Mali, Srednji, Veliki',
      'Predstavlja poverenje i mir',
      'Luksuzna poklon kutija',
      'Ne vene - večan poklon',
    ],
    images: ['/products/plavi meda velicine.png'],
    sizes: [
      { size: 'Mali', price: 1799 },
      { size: 'Srednji', price: 2799 },
      { size: 'Veliki', price: 3899 },
    ],
    badge: 'TOP',
    sku: 'TEDDY-BLUE-001',
  },
  {
    id: 'roze-meda',
    name: 'Roze medvedić od ruža',
    category: 'TEDDY',
    price: 1799, // Cena za malog
    shortDesc: 'Sladak, romantičan i neodoljiv. Poklon pun topline i emocija.',
    description: 'Roze meda je poklon pun topline i emocija — savršen za nežna iznenađenja, prve poklone ili kada želiš da nekome ulepšaš dan. Dostupan u 3 veličine.',
    features: [
      'Napravljen od mini ruža',
      '3 veličine: Mali, Srednji, Veliki',
      'Idealan za nežna iznenađenja',
      'Romantičan poklon',
      'Ne vene - večan poklon',
    ],
    images: ['/products/roze meda velicine.png'],
    sizes: [
      { size: 'Mali', price: 1799 },
      { size: 'Srednji', price: 2799 },
      { size: 'Veliki', price: 3899 },
    ],
    badge: 'Najprodavanije',
    sku: 'TEDDY-PINK-001',
  },
  {
    id: 'beli-meda',
    name: 'Beli medvedić od ruža',
    category: 'TEDDY',
    price: 1799, // Cena za malog
    shortDesc: 'Simbol čiste ljubavi i nežnosti. Savršen poklon kada želiš da kažeš „tu sam za tebe".',
    description: 'Beli meda je savršen poklon kada želiš da kažeš „tu sam za tebe" – tiho, iskreno i sa stilom. Idealan za romantične trenutke, rođendane i posebna iznenađenja. Dostupan u 3 veličine.',
    features: [
      'Napravljen od bele mini ruža',
      '3 veličine: Mali, Srednji, Veliki',
      'Simbol čiste ljubavi',
      'Luksuzna poklon kutija',
      'Ne vene - večan poklon',
    ],
    images: ['/products/beli meda velicine.png'],
    sizes: [
      { size: 'Mali', price: 1799 },
      { size: 'Srednji', price: 2799 },
      { size: 'Veliki', price: 3899 },
    ],
    badge: 'Premium',
    sku: 'TEDDY-WHITE-001',
  },
  {
    id: 'crveni-meda',
    name: 'Crveni medvedić od ruža',
    category: 'TEDDY',
    price: 1799, // Cena za malog
    shortDesc: 'Klasika koja nikad ne greši. Najjači simbol ljubavi i strasti.',
    description: 'Crveni meda govori „volim te" bez ijedne reči. Najjači simbol ljubavi i strasti — idealan za Dan zaljubljenih, godišnjice ili kada želiš da ostaviš snažan utisak. Dostupan u 3 veličine.',
    features: [
      'Napravljen od crvene mini ruža',
      '3 veličine: Mali, Srednji, Veliki',
      'Najjači simbol ljubavi',
      'Idealno za Dan zaljubljenih',
      'Ne vene - večan poklon',
    ],
    images: ['/products/crveni mena velicine.png'],
    sizes: [
      { size: 'Mali', price: 1799 },
      { size: 'Srednji', price: 2799 },
      { size: 'Veliki', price: 3899 },
    ],
    sku: 'TEDDY-RED-001',
  },
];
