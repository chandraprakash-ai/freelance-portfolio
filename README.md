# Premium Portfolio - Chandraprakash Prajapati

A high-conversion, premium portfolio website built with Next.js 14, Tailwind CSS, and TypeScript. Designed for a "old-money" / technical-visionary aesthetic.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or later
- npm or pnpm

### Installation

```bash
npm install
# or
pnpm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## 🛠 Configuration & Customization

### 1. Payment Links
Update the payment links in `components/Pricing.tsx` and `components/Contact.tsx`.
Currently, they are placeholders or point to `#contact`. You should replace them with your Razorpay/UPI payment page URLs.

### 2. Contact Form
The contact form in `components/Contact.tsx` is a simulation. To make it functional:
- Use a service like [Getform.io](https://getform.io) or [FormSubmit.co](https://formsubmit.co).
- Update the `<form action="...">` attribute with your endpoint.

### 3. WhatsApp Number
Update the WhatsApp number in `components/Header.tsx` and `components/Contact.tsx`.
Look for `href="https://wa.me/91XXXXXXXXXX"`.

### 4. Images
Replace the placeholder images in `public/` folder or update the paths in `components/Portfolio.tsx` and `components/Hero.tsx`.

## 📦 Deployment

### Vercel (Recommended)
1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the project.
3. Vercel will automatically detect Next.js and deploy.

### Netlify
1. Drag and drop the `.next` folder (after build) or connect via Git.
2. Build command: `npm run build`
3. Publish directory: `.next` (or use Netlify Next.js plugin).

## 🎨 Design System

- **Fonts**: Inter (Body), Playfair Display (Headings).
- **Colors**:
  - Charcoal: `#0f1724`
  - Green: `#1f8a4f`
  - Beige: `#f5f3ef`
  - Gold: `#b68b3a`

## 📄 License

Private. Do not distribute without permission.
