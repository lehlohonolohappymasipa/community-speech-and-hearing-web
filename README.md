# Mafhungo Speech & Hearing Website

A modern, responsive website for Thavhanyedza Alex Mafhungo, a Speech and Hearing Therapy Consultant serving Limpopo Province, South Africa since 1992.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Can be deployed as a static site (no backend required)

### Why This Stack?

- **Next.js App Router**: Provides excellent SEO, fast page loads, and modern React features
- **TypeScript**: Ensures type safety and better developer experience
- **Tailwind CSS**: Enables rapid, consistent styling with a utility-first approach
- **Static Export Ready**: No database or backend needed, can be hosted anywhere

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

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

The development server runs at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── globals.css        # Global styles and CSS variables
│   ├── services/
│   │   └── page.tsx       # Services page
│   ├── book/
│   │   └── page.tsx       # Book page
│   ├── about/
│   │   └── page.tsx       # About page
│   └── contact/
│       ├── page.tsx       # Contact page
│       └── ContactForm.tsx # Contact form component
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ui/
│       ├── Button.tsx     # Reusable button component
│       ├── Card.tsx       # Card components
│       └── Section.tsx    # Section wrapper components
├── content/
│   └── site.json          # Site content configuration
├── public/
│   └── images/            # Image assets (see below)
└── README.md
```

## TODO Checklist

### Images

Service images were added as `.webp` files and placeholders were removed from the UI. Current images in use:

| Image Path                          | Used For                           |
| ----------------------------------- | ---------------------------------- |
| `/images/hero-bg.webp`              | Hero + page header backgrounds     |
| `/images/audiologist-headshot.webp` | Specialist portrait                |
| `/images/book-cover.webp`           | Book cover                         |
| `/images/hearing-assessment.webp`   | Service: Hearing Assessments       |
| `/images/hearing-aid.webp`          | Service: Hearing Aids              |
| `/images/speech-therapy.webp`       | Service: Speech & Language Therapy |
| `/images/pediatric-audiology.webp`  | Service: Pediatric Audiology       |

### Required: Add Sample Chapter PDF

Place a sample chapter PDF at:

```
/public/sample-chapter.pdf
```

### Required: Update Contact Information

Update in `content/site.json`:

```json
{
  "contact": {
    "email": "TODO: Add email address",
    "linkedIn": "TODO: Add LinkedIn URL",
    "mapEmbedUrl": "TODO: Add Google Maps embed URL"
  }
}
```

Also update in:

- `components/Footer.tsx` - LinkedIn link
- `app/contact/ContactForm.tsx` - Email and LinkedIn display
- `app/contact/page.tsx` - Google Maps embed

### Optional: Form Submission

The contact form currently simulates submission. To make it functional:

1. **Option A: Email Service** - Integrate with a service like:
   - Formspree (https://formspree.io)
   - Netlify Forms
   - EmailJS

2. **Option B: API Route** - Create an API route in `app/api/contact/route.ts`

### Optional: Google Maps

To embed Google Maps on the contact page:

1. Go to Google Maps
2. Search for the practice location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the placeholder in `app/contact/page.tsx`

## Deployment

### Static Export (Recommended for this site)

Add to `next.config.ts`:

```typescript
const nextConfig = {
  output: "export",
};
```

Then build:

```bash
npm run build
```

The `out` directory can be deployed to any static hosting:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any web server

### Vercel (Easiest)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

## Color Palette

The site uses a professional medical color scheme:

- **Primary (Teal):** Trust, professionalism, healthcare
  - Main: `#0d9488`
  - Dark: `#0f766e`
  - Light: `#ccfbf1`

- **Accent (Coral/Orange):** Warmth, book promotion, CTAs
  - Main: `#f97316`
  - Dark: `#ea580c`
  - Light: `#ffedd5`

- **Neutral:** Clean, readable content
  - Text: `#171717` to `#737373`
  - Backgrounds: `#ffffff` to `#fafafa`

## Accessibility

The site includes:

- Skip-to-content link
- Proper heading hierarchy
- ARIA labels on interactive elements
- Color contrast compliance
- Keyboard navigation support
- Form field error messages

## SEO

Configured with:

- Meta titles and descriptions per page
- Open Graph tags (update image URLs after adding real images)
- Semantic HTML structure
- Proper heading hierarchy
- robots meta tag

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome for Android)
- Responsive from 320px width and up

## License

This project is private and created for Mafhungo Speech & Hearing.

---

**Contact for support:** [TODO: Add developer contact]
