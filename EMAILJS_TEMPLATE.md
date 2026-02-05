# 📧 EmailJS Template Setup

## Kredencijali (već podešeno u .env.local)

```
Service ID: service_vy3mcok
Template ID: template_pmvxkts
Public Key: VwfluDR1L2MEesHMv
```

---

## 🔧 Kako podesiti EmailJS Template

1. **Idi na:** https://www.emailjs.com/
2. **Prijavi se** sa svojim nalogom
3. **Klikni na:** Email Templates → Template `template_pmvxkts`
4. **Podesi Template Settings:**

### Template Settings:

**To Email:** `tvoj-email@gmail.com` (tvoj email gde želiš da primaš porudžbine)

**From Name:** `{{customer_name}}`

**Reply To:** `{{customer_email}}`

**Subject:** `🌹 Nova porudžbina #{{order_number}} - Pokloni`

---

## 📋 TEMPLATE CONTENT (kopiraj ovo u "Content" polje)

### Plain Text verzija:

```
═══════════════════════════════════════════════════
🌹 NOVA PORUDŽBINA - POKLONI
═══════════════════════════════════════════════════

BROJ PORUDŽBINE: {{order_number}}
VREME: {{timestamp}}

═══════════════════════════════════════════════════
PODACI KUPCA
═══════════════════════════════════════════════════

👤 Ime i prezime: {{customer_name}}
📞 Telefon: {{customer_phone}}
📧 Email: {{customer_email}}

📍 Adresa dostave:
   {{customer_address}}
   {{customer_city}}, {{customer_postal}}

💬 Napomena kupca:
{{customer_note}}

═══════════════════════════════════════════════════
PORUČENI PROIZVODI
═══════════════════════════════════════════════════

{{items_list}}

═══════════════════════════════════════════════════
UKUPAN IZNOS: {{total_price}}
═══════════════════════════════════════════════════

---
Ovu porudžbinu treba obraditi i kontaktirati kupca na gore navedeni telefon/email.
```

---

### HTML verzija (lepša, preporučeno):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .order-number {
      background: rgba(255,255,255,0.2);
      padding: 10px;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
    .section {
      background: white;
      padding: 20px;
      margin: 0;
      border-left: 4px solid #f43f5e;
      border-right: 4px solid #f43f5e;
    }
    .section-title {
      color: #f43f5e;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #ffe4e6;
    }
    .info-row {
      padding: 8px 0;
      display: flex;
      align-items: flex-start;
    }
    .info-label {
      font-weight: bold;
      min-width: 140px;
      color: #666;
    }
    .info-value {
      color: #333;
    }
    .products {
      background: #fff1f2;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      white-space: pre-line;
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }
    .total {
      background: #f43f5e;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      border-radius: 0 0 10px 10px;
      margin-top: 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 14px;
    }
    .note {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🌹 NOVA PORUDŽBINA</h1>
    <div class="order-number">
      #{{order_number}}
    </div>
    <div style="margin-top: 10px; font-size: 14px; opacity: 0.9;">
      {{timestamp}}
    </div>
  </div>

  <div class="section">
    <div class="section-title">📋 PODACI KUPCA</div>
    
    <div class="info-row">
      <span class="info-label">👤 Ime i prezime:</span>
      <span class="info-value">{{customer_name}}</span>
    </div>
    
    <div class="info-row">
      <span class="info-label">📞 Telefon:</span>
      <span class="info-value">{{customer_phone}}</span>
    </div>
    
    <div class="info-row">
      <span class="info-label">📧 Email:</span>
      <span class="info-value">{{customer_email}}</span>
    </div>
    
    <div class="info-row">
      <span class="info-label">📍 Adresa:</span>
      <span class="info-value">{{customer_address}}</span>
    </div>
    
    <div class="info-row">
      <span class="info-label">🏙️ Grad:</span>
      <span class="info-value">{{customer_city}}</span>
    </div>
    
    <div class="info-row">
      <span class="info-label">📮 Poštanski broj:</span>
      <span class="info-value">{{customer_postal}}</span>
    </div>
    
    <div class="note">
      <strong>💬 Napomena kupca:</strong><br>
      {{customer_note}}
    </div>
  </div>

  <div class="section">
    <div class="section-title">🛍️ PORUČENI PROIZVODI</div>
    <div class="products">{{items_list}}</div>
  </div>

  <div class="total">
    UKUPNO: {{total_price}}
  </div>

  <div class="footer">
    <p><strong>⚡ Akcija potrebna:</strong> Kontaktiraj kupca na gore navedeni telefon ili email.</p>
    <p style="color: #999; font-size: 12px;">
      Ova porudžbina je stigla sa: pokloni.rs<br>
      Automatski generisano putem EmailJS
    </p>
  </div>
</body>
</html>
```

---

## ✅ Koraci za finalizaciju:

1. **Otvori EmailJS Dashboard**
2. **Email Templates → Tvoj template (`template_4va14hd`)**
3. **Settings tab:**
   - To Email: `tvoj-email@gmail.com`
   - From Name: `{{customer_name}}`
   - Reply To: `{{customer_email}}`
   - Subject: `🌹 Nova porudžbina #{{order_number}} - Pokloni`

4. **Content tab:**
   - **Ako želiš PLAIN TEXT:** Kopiraj "Plain Text verziju" odozgo
   - **Ako želiš LEPU HTML:** Kopiraj "HTML verziju" odozgo (PREPORUČENO)

5. **Klikni "Save"**

6. **Test slanje:**
   - U EmailJS dashboard-u klikni "Test it"
   - Ili pokreni sajt i napravi test porudžbinu

---

## 🧪 Test porudžbina

Pokreni sajt i napravi test:
```bash
npm run dev
```

1. Otvori http://localhost:3000
2. Dodaj proizvod u korpu
3. Idi na checkout
4. Popuni test podatke
5. Klikni "Poruči"
6. Proveri svoj email! 📧

---

✅ **Sve je spremno! EmailJS će ti slati porudžbine na email.**
