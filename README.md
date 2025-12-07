# Decent E-Commerce 🛒  
A modern e-commerce web application built with **Next.js 14**, **Tailwind CSS**, and **Prisma**.

## 🚧 Project Status  
**This project is currently under active development (WIP).**  
New features, improvements, and fixes are being added regularly.

---

## ⚡ Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **NextAuth (Google + Credentials)**
- **Supabase (for database & storage)**
- **React Hook Form + Zod (for validations)**
- **Vercel (deployment later)**

---

## ✨ Features (Implemented / In Progress)

### ✅ Implemented
- Google Authentication (NextAuth)
- Credentials Authentication (Email + Password)
- Prisma database schema
- User cart creation per user
- Add to cart / update quantity
- Responsive product cards
- Basic product listing UI

### 🔄 In Progress
- Cart page UI polishing
- Remove item from cart
- Product details page
- Admin/Vendor dashboard
- Product management (add/edit/delete)
- Full checkout flow
- Order system

### 📝 Planned
- Wishlist system  
- Search & filtering  
- Material UI redesign  
- Full responsive overhaul  

---

## 📂 Project Structure (simplified)

```
app/
 ├─ (features)/
 │   ├─ auth/
 │   ├─ cart/
 │   ├─ products/
 │   └─ _actions/
 ├─ api/
 └─ layout.tsx
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/USERNAME/Decent-ecommerce
cd Decent-ecommerce
npm install
npm run dev
```

Make sure you configure your `.env` file:

```
DATABASE_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 🧑‍💻 Author
**Hussain Abdelkawy**

---

## 📌 Notes  
This repository contains work-in-progress code.  
Features may change, break, or be refactored as the project evolves.

