# Vishwa Setu — International Visa & Luxury Holiday Concierge

> **"We Plan, You Enjoy"**  
> *Door-to-Door International Visa Arrangements & Bespoke Luxury Holidays — The Full Headache is Ours!*  
> Directed & Curated by **Rajiv Thakkur** (Founder & Principal Concierge) • 📞 **+91 9891045669**

---

## 🌟 Architecture & Features

This platform is an ultra-premium, high-converting showcase website built with:
- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (Deep Midnight Obsidian `#070B19`, Royal Navy `#0F172A`, Champagne Gold `#D4AF37`, Crisp Ivory `#F8FAFC`)
- **Framer Motion** for pure screen dynamic flow, parallax animations, and glassmorphic modal transitions
- **Lucide Icons**
- **Supabase Integration** for lead and inquiry management, with automated local vault fallback
- **FlagCDN High-Resolution Visual Flags** to guarantee crisp rendering without Windows emoji glyph bugs

---

## 🚀 Quick Start

### 1. Install & Run Locally
```bash
cd d:/visa
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🗄️ Supabase Database & Server Setup

The application features full end-to-end Supabase integration with an offline local vault fallback.

### Steps to connect your Supabase database:
1. Go to your [Supabase Dashboard](https://supabase.com).
2. Open the **SQL Editor** and execute the script located in:
   ```
   supabase/schema.sql
   ```
   This will create the `inquiries` table, enable Row-Level Security (RLS), configure the anonymous public submission policy, and create indexes on `created_at` and `phone`.
3. Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. Restart your Vite dev server. The footer and inquiry engine will automatically reflect `Supabase Cloud Vault: Connected`.
5. If `.env` is omitted, inquiries are still captured safely in the browser's local concierge memory and the user receives instant celebration screens with 1-click WhatsApp alerts!

---

## 🏷️ Brand Identity & Central Configuration

All brand naming, contact numbers, email addresses, and taglines are centralized in:
```
src/config/brandConfig.ts
```
To swap the active brand name (e.g. to **"Thakkur Global Visa & Holidays"** or **"ShubhYatra Global Concierge"**), simply toggle the commented lines in `src/config/brandConfig.ts`.

---

## 📱 Dynamic Form Logic & WhatsApp Routing

Both the embedded booking lounge (`#contact-inquiry`) and the floating modal (`InquiryModal.tsx`) enforce complete conditional fields:
- **Full Name, Mobile Number (+91 format), Email**
- **Interest Scope Toggle:** International Visa/Tour vs Domestic Indian Trip vs Both
- **International Conditions:** Country pills (Schengen, UAE, UK, USA, Canada, Japan, etc.) + "Visa Only" vs "Visa + Complete Tour Package"
- **Domestic Conditions:** 6 Signature Circuits (Rajasthan, Kashmir, Kerala, Goa, Himachal, Andaman) + "Curated Signature Plans (3★–5★)" vs "Build My Own Unique Custom Plan" + Hotel Tier (3★, 4★, 5★)
- **Instant Confirmation:** Celebratory golden checkmark screen + 1-click pre-filled WhatsApp alert directly to **+91 9891045669**.
