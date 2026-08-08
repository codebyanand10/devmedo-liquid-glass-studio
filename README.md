# DevMeDo: Liquid Glass Studio

Build a modern, visually striking single-page React website for "DevMeDo" — a software 

development agency that builds websites, Android apps, web apps, and iOS apps using AI-assisted development.
 
DESIGN STYLE: Liquid Glass / Glassmorphism

- Use frosted glass panels: backdrop-blur, semi-transparent backgrounds (rgba white/black at 

  5-15% opacity), soft 1px borders with low-opacity white/gradient border glow

- Background: animated, slowly-morphing gradient blobs (liquid shapes) in deep tones — 

  use blues, purples, and teal/cyan accents shifting smoothly with CSS animations or 

  canvas/SVG blob morphing (like a lava-lamp effect, slow and subtle, not distracting)

- Cards and sections should look like floating glass panes over the animated background, 

  with soft drop shadows and subtle inner glow on hover

- Rounded corners (16-24px radius), generous padding, lots of negative space

- Typography: clean modern sans-serif (Inter, Space Grotesk, or similar), bold large 

  headlines, high contrast against glass

INTERACTIVITY & SCROLL ANIMATIONS

- Use Framer Motion for scroll-triggered animations: fade-up + slight scale on section 

  entry, staggered reveal for cards/lists

- Parallax effect on background blobs as user scrolls (blobs shift position/opacity at 

  different scroll speeds than foreground content)

- Sticky/pinned navbar that becomes more opaque/blurred as user scrolls down

- Hover interactions: buttons and cards should have a liquid "ripple" or glow effect on 

  hover, smooth scale transform (1.02-1.05x), and cursor-reactive glass shine if feasible

- Smooth scroll behavior between sections, with a scroll-progress indicator (thin gradient 

  bar at top of page)

- Optional: cursor-following soft glow/light blob on desktop (subtle, disable on mobile)

PAGE SECTIONS

1. Hero — Bold headline: "We Build Digital Products, Powered by AI" (or similar), subtext 

   about web/Android/iOS/web app development, animated CTA button ("Start Your Project"), 

   floating glass mockup graphic of a phone/laptop

2. Services — Grid of glass cards: Web Development, Android App Development, iOS App 

   Development, Web App Development — each with icon, short description, subtle hover-lift

3. Why DevMeDo / AI-Powered Approach — Highlight speed, quality, AI-assisted development 

   process, with animated stat counters (projects delivered, technologies used, etc.)

4. Process — Horizontal or vertical scroll-animated timeline: Discovery → Design → 

   Development → Launch → Support

5. Tech Stack — Logos/icons in a glass strip (React, Next.js, Flutter, Kotlin, Swift, 

   Node.js, AI tools, etc.), maybe auto-scrolling marquee

6. Contact / CTA — Glass contact form (name, email, project type dropdown, message) with 

   liquid input focus states, plus contact details

TECHNICAL REQUIREMENTS

- React with Tailwind CSS

- Framer Motion for all animations

- Fully responsive (mobile-first, but glass/blur effects should degrade gracefully on 

  low-end devices — reduce blur intensity on mobile for performance)

- Dark theme by default (glassmorphism works best on dark backgrounds)

- Fast, smooth 60fps animations — avoid heavy blur radius causing jank

- Accessible: sufficient contrast for text over glass, respects prefers-reduced-motion

Brand name: DevMeDo

Tone: modern, premium, tech-forward, slightly futuristic — like a boutique AI-native dev studio

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1079ac3b-fada-4206-80c5-9ffaf6a67a86).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
