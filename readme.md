# Jayvijay Enterprises — Website

**Proprietor:** Mangal Namdev Darsewad  
**Reg. No.:** 2541600320645296  
**Location:** Datta Krupa Complex, HUDCO Bus Stop, Nanded – 431603

---

## 📁 File Structure

```
jayvijay-enterprises/
├── index.html          ← Home Page
├── founders.html       ← Our Founders (Proprietor + Divisions)
├── products.html       ← Jay Division Products
├── services.html       ← Vijay Division Services
├── careers.html        ← Join Our Team
├── contact.html        ← Contact + WhatsApp Enquiry Form
│
├── assets/
│   ├── css/
│   │   ├── global.css      ← Shared: nav, footer, variables, buttons
│   │   ├── home.css        ← Home page
│   │   ├── founders.css    ← Founders page
│   │   ├── products.css    ← Products page
│   │   ├── services.css    ← Services page
│   │   ├── careers.css     ← Careers page
│   │   └── contact.css     ← Contact page
│   │
│   ├── js/
│   │   ├── global.js       ← Nav, WhatsApp, scroll animations
│   │   ├── home.js         ← Home tab switcher
│   │   ├── services.js     ← Services tab logic
│   │   └── careers.js      ← Apply form
│   │
│   └── images/
│       ├── logo/           ← logo.png, logo-white.png, favicon.ico
│       ├── founders/       ← mangal-darsewad.jpg, jay-division.jpg, vijay-division.jpg
│       ├── products/       ← product photos (5 images)
│       ├── office/         ← office photos
│       └── certificates/   ← scanned certificates
└── README.md
```

---

## 🚀 How to Deploy

### Option 1 — Static Hosting (Free)
Upload the entire folder to any of these:
- **Netlify** → drag & drop at netlify.com/drop
- **Vercel** → `vercel deploy` via CLI
- **GitHub Pages** → push to a repo, enable Pages

### Option 2 — Local Preview
Just open `index.html` in any browser.  
No server needed — it's 100% static HTML/CSS/JS.

### Option 3 — Paid Hosting
Upload via cPanel File Manager or FTP to any shared hosting (Hostinger, GoDaddy, etc.)

---

## 📸 Images to Add

Replace placeholder images in `assets/images/`:

| File | What to put |
|------|-------------|
| `founders/mangal-darsewad.jpg` | Photo of proprietor Mangal Darsewad |
| `founders/jay-division.jpg` | Photo of Jay (division head) |
| `founders/vijay-division.jpg` | Photo of Vijay (division head) |
| `products/double-punch-reti.jpg` | Product photo |
| `products/garden-pipe.jpg` | Product photo |
| `products/binding-wire.jpg` | Product photo |
| `products/centring-nails.jpg` | Product photo |
| `products/ghamela.jpg` | Product photo |
| `office/office-front.jpg` | Shop exterior photo |
| `logo/logo.png` | Company logo |
| `logo/favicon.ico` | Browser favicon |

> **Tip:** Use `.webp` format for faster loading. Compress images at squoosh.app before uploading.

---

## 💬 WhatsApp Numbers (configured in global.js)

| Contact | Number | Purpose |
|---------|--------|---------|
| Jay | +91 92709 75327 | Hardware Sales |
| Vijay | +91 92705 13565 | Compliance / Services |
| Main (Mangal) | +91 93703 21210 | General / Float button |

To change numbers, edit `assets/js/global.js` → `const WA = { ... }` at the top.

---

## ✅ Checklist Before Going Live

- [ ] Add all photos to `assets/images/`
- [ ] Verify all WhatsApp numbers are correct
- [ ] Add favicon.ico
- [ ] Test on mobile (Chrome DevTools → Toggle device)
- [ ] Test all WhatsApp links open correctly
- [ ] Upload scanned certificates to `assets/images/certificates/`

---

*Built for Jayvijay Enterprises, Nanded, Maharashtra*
