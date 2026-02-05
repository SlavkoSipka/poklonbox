# 💼 Uputstvo za Korišćenje

Kompletno uputstvo kako koristiti i upravljati web shopom.

## 📦 Upravljanje Proizvodima

### Gde se nalaze proizvodi?

Fajl: `data/products.ts`

### Izmena postojećih proizvoda

```typescript
{
  id: 'box-red',  // ← NE MENJAJ ID (koristi se u URL-u)
  name: 'Poklon kutija ruža – Crvena',  // ← Izmeni naziv
  category: 'BOX',  // ← BOX ili DOME
  price: 1799,  // ← Nova cena
  oldPrice: 2199,  // ← Stara cena (akcija), ukloni ako nije akcija
  shortDesc: 'Kratak opis...',  // ← Prikaz u listi
  description: 'Duži opis proizvoda...',  // ← Prikaz na detaljnoj strani
  features: [  // ← Lista karakteristika
    'Feature 1',
    'Feature 2',
  ],
  images: [  // ← Slike proizvoda (min 1, max koliko hoćeš)
    '/products/box-red-1.jpg',
    '/products/box-red-2.jpg',
  ],
  badge: 'Najprodavanije',  // ← Bedž (opciono): 'Najprodavanije', 'Premium', 'Ekskluzivno'
  sku: 'BOX-RED-001',  // ← Jedinstvena šifra proizvoda
}
```

### Dodavanje novog proizvoda

Kopiraj postojeći proizvod i izmeni sve vrednosti:

```typescript
export const products: Product[] = [
  // ... postojeći proizvodi
  
  // NOVI PROIZVOD
  {
    id: 'box-white',  // ← Novi jedinstveni ID
    name: 'Poklon kutija ruža – Bela',
    category: 'BOX',
    price: 1899,
    shortDesc: 'Elegantna bela kutija...',
    description: 'Potpuni opis...',
    features: ['Feature 1', 'Feature 2'],
    images: ['/products/box-white-1.jpg'],
    sku: 'BOX-WHITE-001',
  },
];
```

### Uklanjanje proizvoda

Jednostavno obriši ceo objekat proizvoda iz `products` niza.

### Promena kategorija

- `BOX` - Ruže u kutiji
- `DOME` - Svetleće večne ruže

Da dodaš novu kategoriju:
1. Otvori `lib/types.ts`
2. Izmeni: `export type ProductCategory = 'BOX' | 'DOME' | 'NOVA';`
3. Dodaj proizvode sa `category: 'NOVA'`

## 🖼️ Upravljanje Slikama

### Dodavanje slika

1. Stavi sliku u `public/products/` folder
2. U `data/products.ts`, dodaj putanju: `'/products/ime-slike.jpg'`

**Primer:**
```typescript
images: [
  '/products/moj-proizvod-1.jpg',
  '/products/moj-proizvod-2.jpg',
],
```

### Format slika

- **Tip:** JPG (preporučeno) ili PNG
- **Rezolucija:** 800×1000px (omjer 3:4)
- **Veličina:** do 500KB (optimizuj pre uploada)
- **Ime:** bez razmaka i specijalnih karaktera (koristi `-`)

### Optimizacija slika

**Online alati:**
- https://tinypng.com/
- https://squoosh.app/

**Photoshop/GIMP:**
- Export za Web
- Quality: 80-85%

## 💰 Cene

### Promena cena

U `data/products.ts`:

```typescript
price: 1999,  // ← Nova cena
```

### Akcije

```typescript
price: 1799,      // ← Cena sa popustom
oldPrice: 2199,   // ← Stara cena (precrtano)
```

Uklonije akcije:
```typescript
price: 1799,
// oldPrice: 2199,  ← Obriši ili zakomentariši
```

### Valuta

Cene su u dinarima (RSD). Formatiranje se radi automatski u `formatPrice()` funkciji.

Da promeniš valutu:
1. Otvori `lib/utils.ts`
2. U `formatPrice()` funkciji promeni `currency: 'RSD'` na `'EUR'` ili `'USD'`

## 📧 Email Porudžbine

### Kako radi?

Kada kupac popuni formu i klikne "Poruči":
1. Validira se forma
2. Šalje se email preko EmailJS na tvoj email
3. Prikazuje se success strana
4. Korpa se prazni

### Šta se šalje u email-u?

- Broj porudžbine (automatski generisan)
- Podaci kupca (ime, telefon, email, adresa)
- Lista proizvoda (naziv, količina, cena)
- Ukupan iznos
- Vreme porudžbine
- Napomena kupca (ako je ostavio)

### Promena email adrese gde stižu porudžbine

**U EmailJS:**
1. Prijavi se na emailjs.com
2. Email Templates → Tvoj template
3. Izmeni **"To Email"** polje
4. Save

### Email template prilagođavanje

**EmailJS Template Body primer:**

```
🌹 NOVA PORUDŽBINA #{{order_number}}

═══════════════════════════════════
KUPAC
═══════════════════════════════════
👤 {{customer_name}}
📞 {{customer_phone}}
📧 {{customer_email}}
📍 {{customer_address}}, {{customer_city}} {{customer_postal}}

═══════════════════════════════════
PROIZVODI
═══════════════════════════════════
{{items_list}}

═══════════════════════════════════
UKUPNO: {{total_price}}
═══════════════════════════════════

💬 Napomena:
{{customer_note}}

🕒 Vreme: {{timestamp}}
```

Sačuvaj promene u EmailJS.

## 🎨 Dizajn i Boje

### Promena boja

Otvori `app/globals.css` i izmeni u `@theme inline` bloku:

```css
@theme inline {
  --color-rose-500: #f43f5e;  /* ← Izmeni hex kod */
  /* dodaj nove boje */
}
```

Koristi boje u Tailwind-u:
```tsx
className="bg-rose-500 text-white"
```

### Promena fontova

Otvori `app/layout.tsx`:

```typescript
import { Montserrat, Lora } from "next/font/google";

const sans = Montserrat({...});
const serif = Lora({...});
```

### Logo

Trenutno logo je tekst + ikonica.

**Da dodaš sliku:**
1. Stavi logo u `public/logo.png`
2. Otvori `components/Header.tsx`
3. Zameni postojeći logo sa:

```tsx
<Link href="/" className="flex items-center">
  <Image src="/logo.png" alt="Pokloni" width={120} height={40} />
</Link>
```

## 📞 Kontakt Informacije

### Footer

Otvori `components/Footer.tsx`:

```tsx
<span>info@pokloni.rs</span>        // ← Email
<span>+381 60 123 4567</span>       // ← Telefon
<span>@pokloni.rs</span>            // ← Instagram
```

### Success strana

Otvori `app/success/page.tsx`:

```tsx
<span>info@pokloni.rs</span>
<span>+381 60 123 4567</span>
```

## 📊 Praćenje Porudžbina

Trenutno **nema** automatskog sistema za praćenje porudžbina.

### Kako pratim porudžbine?

**Opcija 1: Gmail Filter (preporučeno)**

1. U Gmail-u otvori Settings → Filters
2. Kreiraj filter:
   - From: `noreply@emailjs.com`
   - Subject: contains `porudžbina`
3. Apply label: "Porudžbine"
4. Star it

**Opcija 2: Tabela u Excel/Google Sheets**

Ručno upiši svaku porudžbinu:
- Broj porudžbine
- Ime kupca
- Telefon
- Proizvodi
- Iznos
- Status (primljena, poslata, isporučena)

**Opcija 3: Naprednije rešenje**

Integriši sa:
- Google Sheets API (automatski upisuj porudžbine)
- Airtable
- Notion

## 🚀 Deploy

### Vercel (preporučeno)

**Koraci:**

1. Push kod na GitHub
2. Idi na [vercel.com](https://vercel.com)
3. "Import Project" → Izaberi GitHub repo
4. **Environment Variables:**
   - Dodaj sve 3 EmailJS varijable
5. Deploy!

**Domen:**
- Dobićeš: `tvoj-projekat.vercel.app`
- Možeš dodati custom domen u Settings

### Netlify

```bash
npm run build
npx netlify-cli deploy --prod
```

**Ne zaboravi:** Dodaj EmailJS env varijable u Netlify Settings.

## 🛡️ Sigurnost

### EmailJS kredencijali

- **Public Key** je OK da bude javan (u frontend kodu)
- **Private Key** (ako imaš) NIKAD ne stavljaj u frontend
- EmailJS ima rate limiting (sprečava spam)

### HTTPS

Vercel i Netlify automatski dodaju besplatan SSL certifikat.

## 📈 Performanse

### Optimizacija slika

Next.js automatski optimizuje slike sa `next/image`.

**Best practice:**
- Koristi `.jpg` za fotografije
- Koristi `.png` za grafiku sa transparencijom
- Optimizuj pre uploada (TinyPNG)

### Cache

Vercel/Netlify automatski kesiraju static resurse.

## 🐛 Česta Pitanja

### Kako da promenim broj proizvoda u homepage?

Otvori `app/page.tsx`:

```tsx
const featured = products.slice(0, 4);  // ← Promeni broj
```

### Kako da sakrijem kategoriju?

U `data/products.ts` filtriraj proizvode:

```typescript
export const products: Product[] = [
  // Samo BOX proizvodi
].filter(p => p.category === 'BOX');
```

### Kako da dodam polje u checkout formu?

1. Otvori `app/checkout/page.tsx`
2. Dodaj u `formData` state:
```tsx
const [formData, setFormData] = useState({
  // ... postojeća polja
  company: '',  // ← novo polje
});
```
3. Dodaj input u JSX
4. Ažuriraj EmailJS template da prikazuje novo polje

### Kako da omogućim online plaćanje?

Trenutno projekat **ne podržava** online plaćanje (namerno).

**Da dodaš:**
- Stripe: [Next.js + Stripe tutorial](https://stripe.com/docs/checkout/quickstart)
- PayPal: [PayPal integration](https://developer.paypal.com/docs/checkout/)

**Napomena:** Ovo zahteva backend ili Serverless funkcije.

### Kako da dodam više jezika?

**Opcija 1: Hardcode (brzo)**
- Kreiraj `/en` i `/sr` folderе
- Dupliraj sve stranice
- Ručno prevedi

**Opcija 2: i18n (profesionalno)**
- Koristi `next-intl` ili `react-i18next`
- [Next.js Internationalization guide](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

## 📞 Podrška

Za tehničku pomoć:
- README.md - Osnovna dokumentacija
- SETUP.md - Setup vodič
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)

---

**Želim ti uspešnu prodaju! 🎁🌹**
