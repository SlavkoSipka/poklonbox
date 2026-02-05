# 🚀 Setup Guide - Pokloni Web Shop

Brzi vodič za pokretanje web shopa.

## ✅ Preduslov

Proveri da li imaš instalirano:

```bash
node --version  # Treba 18.x ili novije
npm --version   # Treba 9.x ili novije
```

Ako nemaš Node.js, preuzmi sa [nodejs.org](https://nodejs.org/)

## 📦 Korak 1: Instalacija

```bash
# U folderu projekta:
npm install
```

Sačekaj dok se svi paketi instaliraju (~2-3 minuta).

## 📧 Korak 2: Podešavanje EmailJS

EmailJS omogućava slanje porudžbina na email bez backend servera.

### 2.1 Napravi EmailJS nalog

1. Idi na: https://www.emailjs.com/
2. Klikni **"Sign Up"** i napravi besplatan nalog
3. Potvrdi email adresu

### 2.2 Dodaj Email Service

1. U dashboard-u klikni **"Email Services"**
2. Klikni **"Add New Service"**
3. Izaberi svoj email provider (Gmail, Outlook, Yahoo, itd.)
4. Za Gmail:
   - Klikni "Connect Account"
   - Prijavi se sa Gmail nalogom
   - Dozvoli pristup
5. **Kopiraj Service ID** (npr. `service_abc1234`)

### 2.3 Kreiraj Email Template

1. Klikni **"Email Templates"**
2. Klikni **"Create New Template"**
3. **Template Name:** `Nova Porudžbina`
4. **Podešavanje:**
   - **To Email:** Tvoj email (npr. `tvoj@email.com`)
   - **From Name:** `{{customer_name}}`
   - **Reply To:** `{{customer_email}}`
   - **Subject:** `Nova porudžbina #{{order_number}}`

5. **Template Content (Body):**

```
Primljena nova porudžbina!

═══════════════════════════════════
BROJ PORUDŽBINE: {{order_number}}
═══════════════════════════════════

KUPAC:
─────────────────────────────────
• Ime i prezime: {{customer_name}}
• Telefon: {{customer_phone}}
• Email: {{customer_email}}
• Adresa: {{customer_address}}
• Grad: {{customer_city}}
• Poštanski broj: {{customer_postal}}

PROIZVODI:
─────────────────────────────────
{{items_list}}

═══════════════════════════════════
UKUPNO: {{total_price}}
═══════════════════════════════════

NAPOMENA KUPCA:
{{customer_note}}

Vreme porudžbine: {{timestamp}}
```

6. Klikni **"Save"**
7. **Kopiraj Template ID** (npr. `template_xyz5678`)

### 2.4 Kopiraj Public Key

1. Klikni na svoj **Account** (gornji desni ugao)
2. Idi na **"General"** tab
3. **Kopiraj "Public Key"** (npr. `aBcDeFgHiJkLmNoPq`)

### 2.5 Kreiraj .env.local fajl

U root folderu projekta (gde je package.json):

**Windows:**
```bash
copy .env.local.example .env.local
notepad .env.local
```

**Mac/Linux:**
```bash
cp .env.local.example .env.local
nano .env.local
```

**Sadržaj `.env.local` fajla:**

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPq
```

❗ **Zameni vrednosti sa svojim iz EmailJS!**

## 🖼️ Korak 3: Dodaj slike proizvoda

Trenutno projekat koristi placeholder slike. Dodaj svoje slike:

### 3.1 Gde staviti slike?

Sve slike idu u folder: `public/products/`

### 3.2 Koje slike su potrebne?

**Ruže u kutiji (4 proizvoda):**
- `box-red-1.jpg` i `box-red-2.jpg`
- `box-pink-1.jpg` i `box-pink-2.jpg`
- `box-purple-1.jpg` i `box-purple-2.jpg`
- `box-blue-1.jpg` i `box-blue-2.jpg`

**Svetleće ruže u kupoli (3 proizvoda):**
- `dome-red-1.jpg` i `dome-red-2.jpg`
- `dome-gold-1.jpg` i `dome-gold-2.jpg`
- `dome-premium-1.jpg` i `dome-premium-2.jpg`

### 3.3 Kako dodati?

1. Stavi slike u `public/products/` folder
2. Preimenuj ih po šemi iznad
3. Otvori `data/products.ts`
4. Zameni URL-ove placeholder slika sa lokalnim putanjama:

**Primer:**
```typescript
images: ['/products/box-red-1.jpg', '/products/box-red-2.jpg'],
```

**Preporučena rezolucija:** 800×1000px (omjer 3:4)

## ▶️ Korak 4: Pokreni aplikaciju

```bash
npm run dev
```

Otvori browser: **http://localhost:3000**

🎉 **Sajt je spreman!**

## 🧪 Testiranje

### 4.1 Testiraj porudžbinu

1. Dodaj proizvode u korpu
2. Idi na checkout
3. Popuni formu sa test podacima
4. Klikni "Poruči"
5. Proveri email - trebala bi da stigla porudžbina!

### 4.2 Ako ne radi?

**Problem:** Email ne stiže

**Provera:**
1. Da li si pravilno podesio EmailJS?
2. Da li si kopirao tačne ID-jeve u `.env.local`?
3. Da li si save-ovao `.env.local`?
4. Da li si restartovao `npm run dev` posle izmene `.env.local`?

**Otvori browser console (F12):**
- Ako vidiš grešku "EmailJS nije pravilno konfigurisan" → proveri `.env.local`
- Ako vidiš "401 Unauthorized" → proveri Public Key
- Ako vidiš "404 Not Found" → proveri Service ID ili Template ID

## 🎨 Prilagođavanje

### Izmena proizvoda

Otvori: `data/products.ts`

```typescript
{
  name: 'Tvoj proizvod',
  price: 1999,  // ← izmeni cenu
  oldPrice: 2499,  // ← akcija (opciono)
  // ... itd
}
```

### Izmena boja

Otvori: `app/globals.css` i izmeni u `@theme inline` bloku.

### Izmena kontakt informacija

- Footer: `components/Footer.tsx`
- Success strana: `app/success/page.tsx`

## 🌐 Deploy na Internet

### Vercel (najlakše):

1. Napravi nalog na [vercel.com](https://vercel.com)
2. Povežи sa GitHub-om
3. Importuj projekat
4. **Dodaj Environment Variables** u Vercel Settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Deploy!

Vercel će ti dati besplatan URL: `tvoj-projekat.vercel.app`

### Netlify:

```bash
npm run build
npx netlify-cli deploy --prod
```

**Dodaj environment variables u Netlify Settings.**

## 📝 Pomoć

### Česte greške:

**"Module not found"**
→ Pokreni ponovo: `npm install`

**"Port 3000 is already in use"**
→ Zatvori druge Next.js projekte ili promeni port:
```bash
npm run dev -- -p 3001
```

**"Cannot find module '@emailjs/browser'"**
→ Instaliraj: `npm install @emailjs/browser`

### Dodatna pomoć:

- EmailJS docs: https://www.emailjs.com/docs/
- Next.js docs: https://nextjs.org/docs

---

✅ **Gotov si! Srećno sa prodajom! 🌹**
