# Cakehouse

A stylized one-page bakery website built with Next.js and React.

## Preview

![Cakehouse front](./cakehouse_front.png)

## About

Cakehouse is a brand-forward landing page for **Crème de la Crème Patisserie**. The site combines editorial typography, layered imagery, and motion-driven storytelling to present a premium pastry brand.

## Sections

- Sticky navigation header with desktop/mobile menu
- Hero section with layered background treatment and CTA buttons
- Featured "award-winning" cake showcase
- Animated brand history timeline
- Contact and social footer

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Framer Motion
- Tailwind utility classes (loaded via CDN)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Project Structure

- `app/layout.tsx` - Root HTML layout, fonts, and Tailwind CDN script
- `app/page.tsx` - Main page composition
- `components/Header.tsx` - Sticky navigation + mobile menu
- `components/Hero.tsx` - Hero section
- `components/Showcase.tsx` - Featured cake section
- `components/History.tsx` - Animated timeline
- `components/Footer.tsx` - Contact and social footer
- `public/images/` - Site imagery

## Notes

- The current content and contact details are demo content.
- Update copy, links, and branding assets before production launch.
