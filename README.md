# 🌹 Pokloni - Web Shop za Dan Zaljubljenih

Premium web shop za prodaju romantičnih poklona - ruže u kutijama i svetleće večne ruže u kupoli. Izgađen sa Next.js 14, TypeScript, i Tailwind CSS.

![Pokloni](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Karakteristike

- 🎨 **Prelepo, minimalistički dizajn** - Romantična paleta boja, elegantna tipografija
- 📱 **Mobile-first** - Potpuno responzivan za sve uređaje
- 🛒 **Kompletna shopping funkcionalnost** - Katalog, detalj, korpa, checkout
- 📧 **EmailJS integracija** - Porudžbine se šalju direktno na email (bez online plaćanja)
- 💾 **Persistentna korpa** - localStorage čuva korpu između sesija
- 🔍 **Filter i pretraga** - Po kategoriji, ceni, nazivu
- ⚡ **Brz i optimizovan** - Next.js App Router, optimizovane slike
- 🎯 **SEO friendly** - Meta tagovi, OpenGraph

## 🚀 Brzi Start

### Preduslov

- Node.js 18+ 
- npm ili yarn

### Instalacija

```bash
# 1. Kloniraj ili preuzmi projekat
cd pokloni

# 2. Instaliraj zavisnosti
npm install

# 3. Kopiraj env template i podesi
copy .env.local.example .env.local
# Otvori .env.local i dodaj svoje EmailJS kredencijale

# 4. Pokreni development server
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browser-u.

## 📧 Podešavanje EmailJS

EmailJS se koristi za slanje porudžbina na email bez potrebe za serverom.

### Koraci:

1. **Napravi nalog** na [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Kreiraj Email Service:**
   - Dashboard → Email Services → Add New Service
   - Izaberi provider (Gmail, Outlook, itd.)
   - Kopiraj **Service ID**

3. **Kreiraj Email Template:**
   - Dashboard → Email Templates → Create New Template
   - **Template ID** kopiraj
   - **Template sadržaj** (primer):

```html
Nova porudžbina #{{order_number}}

Kupac:
Ime: {{customer_name}}
Telefon: {{customer_phone}}
Email: {{customer_email}}
Adresa: {{customer_address}}
Grad: {{customer_city}}
Poštanski broj: {{customer_postal}}

Napomena: {{customer_note}}

Proizvodi:
{{items_list}}

UKUPNO: {{total_price}}

Vreme: {{timestamp}}
```

4. **Kopiraj Public Key:**
   - Account → General (Public Key)

5. **Dodaj u `.env.local`:**

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

## 📦 Proizvodi

Proizvodi se definišu u `data/products.ts`. Trenutno ima **7 proizvoda**:

### Ruže u kutiji (BOX):
- Poklon kutija ruža – Crvena
- Poklon kutija ruža – Roze
- Poklon kutija ruža – Ljubičasta
- Poklon kutija ruža – Plava

### Svetleće večne ruže (DOME):
- Svetleća ruža u kupoli – Crvena (Love)
- Svetleća ruža u kupoli – Zlatna
- Premium kupola set – Crvena + srce

### Izmena proizvoda:

Otvori `data/products.ts` i izmeni:

```typescript
{
  id: 'box-red',
  name: 'Poklon kutija ruža – Crvena',
  category: 'BOX', // ili 'DOME'
  price: 1799,
  oldPrice: 2199, // opciono, za akcije
  shortDesc: 'Kratak opis...',
  description: 'Duži opis...',
  features: ['Feature 1', 'Feature 2'],
  images: ['/products/box-red-1.jpg', '/products/box-red-2.jpg'],
  badge: 'Najprodavanije', // opciono
  sku: 'BOX-RED-001',
}
```

## 🖼️ Slike proizvoda

Slike se čuvaju u `public/products/` folderu.

### Format slika:
- **Ime:** `box-red-1.jpg`, `box-red-2.jpg`, `dome-gold-1.jpg`, itd.
- **Preporučena rezolucija:** 800x1000px (omjer 3:4)
- **Format:** JPG ili PNG
- **Optimizacija:** Koristi Next.js Image optimizaciju

### Dodavanje slika:

1. Stavi slike u `public/products/`
2. U `data/products.ts` referiši: `images: ['/products/ime-slike.jpg']`

**Napomena:** Trenutno projekat koristi placeholder putanje. Dodaj svoje slike proizvoda.

## 🎨 Prilagođavanje Dizajna

### Boje

Boje se definišu u `app/globals.css` (Tailwind v4 format):

```css
@theme inline {
  --color-rose-50: #fff1f2;
  --color-rose-500: #f43f5e;
  /* dodaj svoje boje */
}
```

### Fontovi

Fontovi se učitavaju u `app/layout.tsx`:

- **Sans:** Inter (tekst)
- **Serif:** Playfair Display (naslovi)

Promeni ih importovanjem drugih Google Fonts.

### Logo

Logo je u `components/Header.tsx`. Trenutno je tekst + ikonica srca. Zameni sa svojim logom.

## 📱 Stranice

| Putanja | Opis |
|---------|------|
| `/` | Početna (hero, kategorije, proizvodi) |
| `/shop` | Katalog (filter, sort, search) |
| `/product/[id]` | Detalj proizvoda |
| `/cart` | Korpa |
| `/checkout` | Checkout forma + EmailJS |
| `/success` | Uspešna porudžbina |

## 🛠️ Tehnologije

- **Framework:** Next.js 14 (App Router)
- **Jezik:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** EmailJS (client-side)
- **Ikone:** Lucide React
- **Notifikacije:** React Hot Toast
- **State Management:** React Context API
- **Storage:** localStorage (korpa)

## 🌐 Deploy

### Vercel (preporučeno):

```bash
# 1. Instaliraj Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Dodaj environment variables u Vercel dashboard:
# NEXT_PUBLIC_EMAILJS_SERVICE_ID
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Netlify:

```bash
# 1. Instaliraj Netlify CLI
npm i -g netlify-cli

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod
```

**Napomena:** Dodaj environment varijable u deploy platformi.

## 📂 Struktura Projekta

```
pokloni/
├── app/
│   ├── cart/              # Korpa
│   ├── checkout/          # Checkout
│   ├── product/[id]/      # Detalj proizvoda
│   ├── shop/              # Katalog
│   ├── success/           # Uspeh
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Globalni stilovi
│   └── not-found.tsx      # 404
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── QuantityControl.tsx
├── data/
│   └── products.ts        # Proizvodi
├── lib/
│   ├── cart-context.tsx   # Cart state
│   ├── email.ts           # EmailJS
│   ├── types.ts           # TypeScript tipovi
│   └── utils.ts           # Helper funkcije
├── public/
│   └── products/          # Slike
├── .env.local.example     # Env template
├── package.json
└── README.md
```

## 🔧 Skripta Komande

```bash
# Development
npm run dev

# Build za produkciju
npm run build

# Start produkcijski build
npm start

# Lint
npm run lint
```

## 💡 Saveti

### Dodavanje novih proizvoda:
1. Dodaj slike u `public/products/`
2. Dodaj product objekat u `data/products.ts`
3. Sve automatski radi!

### Promena cena:
Izmeni `price` i `oldPrice` u `data/products.ts`

### Promena kontakt informacija:
Izmeni u `components/Footer.tsx` i `app/success/page.tsx`

### Disable kategorija:
Ako ne želiš obe kategorije, samo filtriraj proizvode u `data/products.ts`

## 📄 Licenca

Slobodan za komercijalnu upotrebu.

## 📞 Podrška

Za pitanja i pomoć, kontaktiraj developera ili otvori issue.

---

**Napravljeno sa ❤️ za Dan Zaljubljenih 2026**
