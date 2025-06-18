# Matthew Rundle - Strategic AI Architect Portfolio

A next-generation portfolio website showcasing AI leadership and hands-on expertise in machine learning solutions.

## Features

- **Video Introduction**: Personal 1-2 minute welcome video
- **Case Studies**: 6+ in-depth AI project showcases with metrics
- **Interactive Timeline**: Visual journey through career progression
- **Tech Stack Visualization**: Skills proficiency across AI/ML frameworks
- **Responsive Design**: Optimized for all devices
- **Performance Focused**: Built with Next.js 14 for optimal loading

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

1. **Update Contact Info**: Edit email/social links in `components/Contact.tsx` and `components/Navigation.tsx`
2. **Add Video**: Place your intro video in `public/videos/intro.mp4`
3. **Resume PDF**: Add your resume as `public/matthew-rundle-resume.pdf`
4. **Case Studies**: Modify projects in `lib/case-studies.ts`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Deployment

Optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Environment Variables

No environment variables required for basic setup. For analytics or CMS integration, create `.env.local`:

```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```