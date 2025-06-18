# 🚀 Quick Start Guide

Your AI portfolio is now ready! Here's what you need to do:

## 1. View Your Site
Open your browser and go to: **http://localhost:3000**

## 2. Immediate Updates Needed

### Contact Information
Update these files with your actual information:
- `components/Contact.tsx` - Line 36: Replace with your email
- `components/Contact.tsx` - Line 45: Replace with your LinkedIn URL  
- `components/Contact.tsx` - Line 58: Replace with your GitHub URL
- `components/Navigation.tsx` - Lines 106, 120, 128: Update social links

### Personal Branding
- Add your headshot to `public/images/`
- Create a PDF version of your resume and add to `public/`

## 3. Video Creation Priority
The welcome video is your biggest differentiator. Here's your script outline:

**0-15s**: "I've transformed business challenges into AI solutions, driving over $200 million in measurable impact..."

**15-45s**: "My journey at Vrbo revealed AI's power to solve complex problems at unprecedented scale..."

**45-75s**: "From optimizing 570,000 listings to building real-time ML systems..."

**75-90s**: "Let me show you how strategic AI leadership can transform your organization..."

Save as: `public/videos/intro.mp4`

## 4. Case Study Enhancements
For each case study in `lib/case-studies.ts`:
- Add real demo URLs
- Link to GitHub repos (if public)
- Add screenshots to `public/images/case-studies/`

## 5. Deploy to Production

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect to your Vercel account
```

## 6. Custom Domain
1. Purchase domain (e.g., matthewrundle.ai)
2. Add in Vercel dashboard
3. Update DNS records

## What You've Built
✅ Responsive, modern portfolio site
✅ 6 detailed AI case studies with metrics
✅ Interactive timeline of your journey
✅ Dynamic tech stack visualization
✅ Professional contact section
✅ SEO-optimized structure
✅ Performance-focused architecture

## Next Steps
1. Record video (highest priority!)
2. Update all placeholder content
3. Add professional photos
4. Deploy to Vercel
5. Share with trusted reviewers
6. Launch! 🎉

---

**Need help?** The codebase is well-structured and commented. Each component is in the `/components` folder, and all data is centralized in `/lib`.