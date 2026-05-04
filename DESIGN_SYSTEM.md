# System Design Mastery - UI & Aesthetics Guide

This document serves as the source of truth for the project's design system, styling rules, and UI philosophy. Any future development, component creation, or AI code generation **must strictly adhere** to these rules to preserve the established aesthetic.

## 1. Core Philosophy
The platform utilizes a **"Blueprint-Inspired" Technical Design Language**. 
It is built to feel like high-end engineering software rather than a standard web app.
- **Minimalist & Raw**: No excessive shadows, no soft gradients, no rounded corners.
- **High-Fidelity**: Pixel-perfect alignments, thin lines, and monospace accents.
- **Zero-Radius**: Everything is completely sharp (`rounded-none`, `--radius: 0px`). Do not use `rounded-sm`, `rounded-md`, or any border radius.

## 2. Typography
We use a three-font system defined in `app/layout.tsx`:
1. **Headings** (`font-heading`): *Fraunces* – Used for massive, impactful titles (often combined with `italic` for specific words to create a high-end editorial feel).
2. **Technical & Accents** (`font-mono`): *JetBrains Mono* – The backbone of the technical aesthetic. Used for subheadings, indexes (e.g., `001`), labels, metadata, and buttons. Always pair with `uppercase` and heavy tracking (e.g., `tracking-[0.2em]` or `tracking-widest`).
3. **Body & Bengali Text** (`font-sans`): *Noto Sans Bengali* – Clean readability for paragraphs and course content.

## 3. Colors & Theming (Light/Dark Mode)
The app supports both Light and Dark modes via `next-themes` and a custom `.dark` class implementation in `globals.css`.
- **Backgrounds**: 
  - Dark: Deep, almost-black blue (`#05080f`).
  - Light: Pure white (`#ffffff`).
- **Primary Accent**: Electric Blue (`#3b82f6`). Used for active states, square dots, and primary buttons.
- **Borders**: Extremely subtle. `border-border` (`#162035` in dark, `#e2e8f0` in light). Use `border-white/10` (or `border-primary/20 dark:border-white/10` for theme compatibility) for element-specific borders.
- **Hover States**: Use subtle background shifts rather than solid fills. 
  - Example: `hover:bg-primary/5 dark:hover:bg-white/[0.02]`.

## 4. Key Architectural Components
### The "Cross-Border" Grid System
The signature UI element is the infinite blueprint grid.
- All major layout sections should be wrapped in the `<BorderCross>` component.
- This component generates a subtle box with plus-signs (`+`) at the corners and infinite vertical lines that bleed off the screen, mimicking architectural draft paper.

### SubHeaders
Never manually build a section header. Always use the `<SubHeader>` component.
- **Format**: A tiny primary-colored square dot `■`, followed by an index `00X`, followed by the title.
- **Styling**: `text-[10px] font-mono font-bold uppercase tracking-[0.2em]`.

## 5. Component Styling Rules
- **Buttons / Links**: Avoid default Shadcn button styles (which include rings and background fills). Instead, use "Ghost" styles.
  - Buttons should have a thin border (`border-border` or `border-primary/20 dark:border-white/10`).
  - Text should be `font-mono text-[10px] uppercase tracking-[0.25em]`.
  - On hover, do not fill the button; instead, transition the text color to full brightness (`text-foreground`) and slightly increase border opacity (`hover:border-primary/50 dark:hover:border-white/30`).
  - Animate icons inside buttons on hover (e.g., `group-hover:translate-x-0.5`).
- **Cards (Topic Cards / Info Boxes)**: 
  - Sharp borders (`border-r border-b border-border`).
  - Background is `bg-card` or `bg-muted/5`.
  - Content should have generous padding (`p-8` or `p-12`).

## 6. Micro-Interactions & Backgrounds
- **Hover Animations**: Keep them strictly utilitarian. Use Tailwind's `transition-all duration-200` for simple hover states.
- **Complex UI Animations (Framer Motion)**: For mounting/unmounting elements (like accordions) or programmatically controlling the scroll position, ALWAYS use `framer-motion`.
  - **Easing Standard**: All Framer Motion animations must utilize the custom architectural easing curve: `ease: [0.16, 1, 0.3, 1]`. This mimics a high-tension spring, providing a premium, physically grounded snap.
  - **Accordions**: Use `<AnimatePresence initial={false}>` and `<motion.div>` animating `height: 0` to `height: 'auto'`.
- **Hero Background**: The hero section uses `animate-stars` and `animate-stars-slow` (defined in `globals.css`) to create an upward-floating particle effect.
- **Grid Patterns**: The global page background uses a CSS `linear-gradient` to draw a `40px` by `40px` grid using `var(--primary)` at very low opacity (`opacity-[0.05] dark:opacity-[0.03]`).

## 7. Global CSS Overrides
- **Scrollbar**: A custom, ultra-thin (`4px`) scrollbar is defined at the bottom of `globals.css`. It uses sharp edges (`border-radius: 0px`) and the primary color for the thumb.
- **Button Reset**: All native buttons have browser outlines and focus rings completely removed (`outline: none; box-shadow: none;`) and `cursor: pointer` explicitly enforced globally.

---
**Checklist for adding new UI:**
- [ ] Is `border-radius` set to 0?
- [ ] Are headings utilizing `font-mono uppercase tracking-[0.2em]` where appropriate?
- [ ] Is it wrapped in `<BorderCross>` if it's a major section?
- [ ] Does it support both Light and Dark mode using `dark:` variants?
- [ ] Are interactive elements using subtle micro-animations (e.g. `translate-x-0.5`) rather than aggressive color fills?
- [ ] Are complex animations (accordions, scroll jumps) utilizing Framer Motion with the standard `ease: [0.16, 1, 0.3, 1]`?
