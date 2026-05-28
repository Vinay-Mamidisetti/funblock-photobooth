# Funblock Photobooth

Marketing website for Funblock Photobooth built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion + Swiper

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Key Routes

- `/` - Main landing page
- `/services` - Service overview
- `/gallery` - Event gallery
- `/experiences` - Booth experiences and offers
- `/about` - About page
- `/contact` - Inquiry page
- `/chicago-photo-booth` - City landing page
- `/dallas-photo-booth` - City landing page
- `/wisconsin-photo-booth` - City landing page

## Project Structure

- `src/app` - App Router pages and route metadata
- `src/sections` - Reusable landing page sections
- `src/components` - UI, layout, and template components
- `src/constants` - Shared content and navigation data
- `src/lib` - Shared helper modules

## Notes

- Navigation links are centralized in `src/constants/navigation.ts`.
- Shared landing composition is in `src/components/templates/LandingPageTemplate.tsx`.
- The old `/pricing` route now redirects to `/experiences`.
