# 🛍️ ShopEase — Full-Stack Shopping Website

> Next.js + Tailwind CSS + Framer Motion + Sanity CMS + WhatsApp Ordering + Razorpay

---

## ✨ Features

- **Beautiful storefront** with animated hero, product grid, search & category filters
- **WhatsApp ordering** — cart auto-formats a message and opens WhatsApp
- **Online payments** via Razorpay (India's best free payment gateway)
- **Admin panel** at `/admin` — add/delete products with image upload
- **Sanity Studio** at `/studio` — full CMS dashboard for advanced management
- **Framer Motion** animations throughout — staggered cards, smooth transitions
- **Persistent cart** using Zustand + localStorage
- **ISR (Incremental Static Regeneration)** — fast pages, updates every 60s
- **Mobile-first** responsive design

---

## 🚀 Quick Start (Step by Step)

### 1. Install dependencies

```bash
cd shopease
npm install
```

### 2. Set up Sanity (Free CMS)

1. Go to [sanity.io](https://sanity.io) → Create free account
2. Create a new project → name it "ShopEase" → dataset: `production`
3. Go to **Settings → API → CORS Origins** → add `http://localhost:3000`
4. Go to **Settings → API → Tokens** → Add token → Editor permissions → copy it
5. Note your **Project ID** from the project dashboard

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id    # from sanity.io
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_editor_token               # from sanity.io tokens

NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210         # your number with country code

NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxx        # from razorpay.com (optional)
RAZORPAY_KEY_SECRET=your_secret                  # from razorpay.com (optional)

ADMIN_PASSWORD=your_secure_password              # for /admin login
```

### 4. Run development server

```bash
npm run dev
```

Visit:
- **Store** → http://localhost:3000
- **Admin panel** → http://localhost:3000/admin (password: admin123)
- **Sanity Studio** → http://localhost:3000/studio

### 5. Add your first product

Go to `/admin` → sign in → fill in product details → click "Add Product" 🎉

---

## 📁 Project Structure

```
shopease/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage (products + hero)
│   │   ├── layout.tsx            # Root layout (nav, cart, toasts)
│   │   ├── globals.css           # Tailwind + custom styles
│   │   ├── admin/page.tsx        # Admin panel entry
│   │   ├── product/[slug]/       # Product detail page
│   │   ├── studio/[[...tool]]/   # Embedded Sanity Studio
│   │   └── api/
│   │       ├── products/         # GET all products
│   │       ├── create-product/   # POST new product + image
│   │       ├── delete-product/   # DELETE product
│   │       └── create-order/     # POST Razorpay order
│   │
│   ├── components/
│   │   ├── shop/
│   │   │   ├── Navbar.tsx        # Sticky nav with search & cart
│   │   │   ├── HeroSection.tsx   # Animated landing hero
│   │   │   ├── CategoryFilter.tsx # Search + category pills
│   │   │   ├── ProductGrid.tsx   # Staggered animated grid
│   │   │   ├── ProductCard.tsx   # Individual product card
│   │   │   ├── ProductDetail.tsx # Full product page
│   │   │   └── CartDrawer.tsx    # Slide-in cart with checkout
│   │   └── admin/
│   │       └── AdminPanel.tsx    # Full admin dashboard
│   │
│   ├── lib/
│   │   ├── sanity.ts             # Sanity client + GROQ queries
│   │   ├── cartStore.ts          # Zustand cart state
│   │   └── whatsapp.ts           # WhatsApp message builder
│   │
│   └── types/index.ts            # TypeScript types
│
├── sanity/
│   ├── schemas/product.ts        # Product schema definition
│   └── index.ts                  # Schema exports
│
├── sanity.config.ts              # Sanity Studio config
├── tailwind.config.ts            # Tailwind + custom colors/fonts
├── next.config.js                # Next.js + image domains
└── .env.local.example            # Template for env vars
```

---

## 🌐 Deploy to Production (Free on Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add all environment variables from `.env.local`
4. Deploy → get your live URL in 2 minutes!

**After deploy:**
- Add your Vercel URL to Sanity CORS: `https://your-app.vercel.app`
- Add your Vercel URL to Razorpay allowed origins

---

## 💳 Payment Options Explained

| Method | Setup | Cost | Best For |
|--------|-------|------|----------|
| **WhatsApp** | Just add phone number | Free forever | Small businesses |
| **Razorpay** | Create account at razorpay.com | 2% per transaction | Higher volumes |

Both work together — customer can choose either at checkout.

---

## 🔧 Customization

### Change store name & colors
Edit `tailwind.config.ts` — update the color palette:
```ts
forest: { 600: "#2D6A4F" }  // Change to your brand color
```

### Add product categories
Edit `sanity/schemas/product.ts` → `category` field → `options.list`

### Change WhatsApp message format  
Edit `src/lib/whatsapp.ts` → `buildWhatsAppMessage()`

### Admin password  
Set `ADMIN_PASSWORD` in `.env.local`

---

## 📞 Support

- Sanity docs: https://www.sanity.io/docs
- Razorpay docs: https://razorpay.com/docs
- Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion
