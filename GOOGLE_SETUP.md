# 🔍 Google Analytics i Search Console Setup

## 📊 Google Analytics (GA4) Setup

### Korak 1: Kreiraj GA4 Property
1. Idi na [Google Analytics](https://analytics.google.com/)
2. Klikni na **Admin** (donji levi ugao)
3. Klikni **Create Property**
4. Unesi detalje:
   - **Property name**: PoklonBox
   - **Reporting time zone**: (GMT+01:00) Belgrade
   - **Currency**: Serbian Dinar (RSD)
5. Klikni **Next**
6. Izaberi **Business category** i veličinu
7. Klikni **Create**

### Korak 2: Postavi Data Stream
1. U Property Settings, klikni **Data Streams**
2. Klikni **Add stream** → **Web**
3. Unesi:
   - **Website URL**: `https://poklonbox.rs`
   - **Stream name**: PoklonBox Website
4. Klikni **Create stream**
5. **Kopiraj Measurement ID** (format: `G-XXXXXXXXXX`)

### Korak 3: Dodaj Measurement ID u projekat
1. Otvori `.env.local` fajl
2. Dodaj liniju:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Restartuj dev server (`npm run dev`)

### Korak 4: Testiraj
1. Otvori sajt u browseru
2. U GA4, idi na **Reports** → **Realtime**
3. Trebalo bi da vidiš svoju aktivnost uživo

---

## 🔍 Google Search Console Setup

### Korak 1: Dodaj Property
1. Idi na [Google Search Console](https://search.google.com/search-console)
2. Klikni **Add property**
3. Izaberi **URL prefix**
4. Unesi: `https://poklonbox.rs`
5. Klikni **Continue**

### Korak 2: Verifikuj vlasništvo
#### Metoda 1: HTML tag (Preporučeno)
1. Izaberi **HTML tag** metodu
2. Kopiraj **content** vrednost iz meta taga
   - Primer: `<meta name="google-site-verification" content="xxxxxxxxxxxxxx" />`
   - Kopiraj samo **xxxxxxxxxxxxxx** deo
3. Dodaj u `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxx
   ```
4. Restartuj dev server i deployuj na Vercel
5. Vrati se na Search Console i klikni **Verify**

#### Metoda 2: DNS (Alternativa)
1. Izaberi **Domain name provider** metodu
2. Kopiraj TXT record
3. Dodaj u DNS settings tvog domena (kod registrara)
4. Sačekaj 5-10 minuta
5. Klikni **Verify**

### Korak 3: Submituj Sitemap
1. U Search Console, idi na **Sitemaps** (levo meni)
2. Unesi: `sitemap.xml`
3. Klikni **Submit**
4. Status bi trebalo da bude **Success** nakon par sati

---

## ✅ Provera

### Proveri da li radi Google Analytics:
```bash
# Otvori browser DevTools (F12)
# Console tab
# Unesi:
gtag

# Trebalo bi da vidiš funkciju, ne "undefined"
```

### Proveri Sitemap:
1. Otvori: `https://poklonbox.rs/sitemap.xml`
2. Trebalo bi da vidiš XML sa svim URL-ovima

### Proveri Robots.txt:
1. Otvori: `https://poklonbox.rs/robots.txt`
2. Trebalo bi da vidiš:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://poklonbox.rs/sitemap.xml
   ```

---

## 📈 Korisni linkovi

- **Google Analytics Dashboard**: https://analytics.google.com/
- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Page Speed Insights**: https://pagespeed.web.dev/

---

## 🎯 Sledeći koraci

1. ✅ Dodaj GA4 Measurement ID u `.env.local`
2. ✅ Verifikuj sajt u Google Search Console
3. ✅ Submituj sitemap u Search Console
4. 📊 Sačekaj 24-48h za prvi analytics report
5. 🔍 Sačekaj 3-7 dana da Google indexira sajt
6. 📈 Postavi ciljeve (Goals) u GA4 za praćenje konverzija

---

## 💡 Napomene

- **Analytics**: Podaci se prikazuju sa malim kašnjenjem (1-24h)
- **Search Console**: Indeksiranje može trajati 1-2 nedelje
- **Sitemap**: Automatski se ažurira na svakom build-u
- **Robots.txt**: Već konfigurisano za najbolje SEO performanse

---

## 🚀 Deploy na Vercel

Nakon što dodaš environment variables u `.env.local`, dodaj ih i na Vercel:

1. Idi na [Vercel Dashboard](https://vercel.com/dashboard)
2. Izaberi svoj projekat
3. Idi na **Settings** → **Environment Variables**
4. Dodaj sve varijable iz `.env.local`
5. Redeploy projekat

**Gotovo! 🎉**
