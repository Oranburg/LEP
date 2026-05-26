---
layout: page
title: "Design System"
permalink: /design-system/
description: "Complete design system documentation including colors, typography, components, and guidelines."
---

# Design System

The LEP website uses a comprehensive, standardized design system to ensure consistency, accessibility, and maintainability across all pages.

## Contents

- [Design Tokens](#design-tokens)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Accessibility](#accessibility)

---

## Design Tokens

All design values are centralized as CSS custom properties (variables) stored in `_design-tokens.scss`. This allows consistent theming and easy updates.

### Core Variables

```css
/* Colors */
--blue-deep:    #0A3255;  /* Primary brand color */
--blue-bright:  #2459A9;
--blue-light:   #6DACDE;
--red-deep:     #B21F2C;  /* Secondary brand color */
--red-bright:   #E82F35;
--red-light:    #E96955;
--yellow:       #FFD65C;  /* Accent/highlight */
--teal:         #B5E1E1;  /* Supporting color */

/* Layout */
--max-width:     1100px;   /* Content max width */
--radius-sm:     4px;
--radius-md:     8px;
--radius-pill:   999px;    /* Fully rounded */

/* Spacing Scale */
--space-xs:  0.25rem;  /* 4px */
--space-sm:  0.5rem;   /* 8px */
--space-md:  1rem;     /* 16px */
--space-lg:  1.5rem;   /* 24px */
--space-xl:  2rem;     /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */

/* Transitions */
--transition-fast:   150ms ease-out;
--transition-normal: 200ms ease-out;
--transition-slow:   300ms ease-out;
```

---

## Color Palette

### Dark Mode (Default)

| Name | Value | Usage |
|------|-------|-------|
| **Background** | `#000000` | Page background |
| **Secondary BG** | `#0A3255` | Sections, cards |
| **Soft BG** | `#0D3D68` | Hover states |
| **Text** | `#FFFFFF` | Primary text |
| **Muted** | `#9CA3AF` | Secondary text |
| **Border** | `#1E5080` | Dividers, borders |
| **Accent** | `#6DACDE` | Links, primary actions |
| **Accent 2** | `#B5E1E1` | Secondary actions |
| **Accent Red** | `#B21F2C` | Warnings, nav, emphasis |

### Light Mode

| Name | Value | Usage |
|------|-------|-------|
| **Background** | `#FFFFFF` | Page background |
| **Secondary BG** | `#F8F9FA` | Sections, cards |
| **Soft BG** | `#E9ECEF` | Hover states |
| **Text** | `#000000` | Primary text |
| **Muted** | `#555555` | Secondary text |
| **Border** | `#D0D8E4` | Dividers, borders |

---

## Typography

### Font Families

- **Headline:** Oswald (sans-serif) - Used for all headings
- **Body:** Roboto (sans-serif) - Main content text
- **Accent:** Crimson Text (serif) - Pull quotes, callouts
- **Mono:** Roboto Mono (monospace) - Code blocks

### Type Scale

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| H1 | 2.2rem | 1.3 | 700 |
| H2 | 1.8rem | 1.3 | 700 |
| H3 | 1.4rem | 1.3 | 700 |
| H4 | 1.1rem | 1.3 | 700 |
| Body | 1rem | 1.7 | 400 |
| Small | 0.85rem | 1.6 | 400 |

---

## Spacing & Layout

### Spacing Scale

Use the spacing scale for consistent margins and padding:

```html
<!-- Examples -->
<div style="margin: var(--space-lg);">  <!-- 24px margin -->
<div style="padding: var(--space-md);">  <!-- 16px padding -->
<div style="gap: var(--space-lg);">       <!-- 24px gap in flex/grid -->
```

### Container

The main content container is limited to `1100px` max-width with responsive padding:

```html
<div class="container">
  <!-- Content is centered and constrained -->
</div>
```

---

## Components

### Buttons

```html
<!-- Primary CTA -->
<button class="btn btn--primary">Call to Action</button>

<!-- Secondary -->
<button class="btn btn--secondary">Secondary</button>

<!-- Text Only -->
<button class="btn btn--text">Text Link</button>
```

**States:** Hover, Focus, Active, Disabled

### Cards

```html
<!-- Basic card -->
<div class="card">
  <h3>Title</h3>
  <p>Content goes here</p>
</div>

<!-- With accent border -->
<div class="card card--accent">
  <h3>Highlighted</h3>
</div>

<!-- Using include -->
{% include card.html title="Title" text="Description" %}
```

### Badges

```html
<!-- Primary badge -->
<span class="badge badge--primary">New</span>

<!-- Secondary -->
<span class="badge badge--secondary">Tag</span>

<!-- Accent -->
<span class="badge badge--accent">Featured</span>
```

### Callouts

```html
{% include callout.html type="info" title="Note" text="Informational content" %}
{% include callout.html type="warning" title="Warning" text="Warning content" %}
{% include callout.html type="success" title="Success" text="Success message" %}
{% include callout.html type="danger" title="Error" text="Error message" %}
```

### Status Indicators

```html
{% include status-badge.html status="available" %}     <!-- Green -->
{% include status-badge.html status="coming-soon" %}   <!-- Yellow -->
{% include status-badge.html status="ended" %}         <!-- Gray -->
```

---

## Responsive Breakpoints

All responsive design uses standardized breakpoints:

| Breakpoint | Width | Mixin |
|------------|-------|-------|
| **Small** | 640px | `@include respond-to('sm')` |
| **Medium** | 768px | `@include respond-to('md')` |
| **Large** | 1024px | `@include respond-to('lg')` |
| **Extra Large** | 1280px | `@include respond-to('xl')` |

**Usage:**

```scss
@include respond-to('md') {
  // Styles applied when viewport ≤ 768px
  font-size: 0.9rem;
}
```

---

## Accessibility

### Focus States

All interactive elements include visible focus states:

```css
:focus-visible {
  outline: 2px solid var(--focus-color);  /* Yellow */
  outline-offset: 2px;
}
```

### Semantic HTML

- Use `<button>` for actions, `<a>` for navigation
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Include `aria-label` on icon buttons
- Use `aria-current="page"` for current nav item

### Color Contrast

- Dark mode: WCAG AAA compliant (7:1+ ratio)
- Light mode: WCAG AA compliant (4.5:1+ ratio)
- Never rely on color alone to convey information

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows logical reading order
- Escape key closes modals and menus
- Enter/Space activates buttons

---

## Usage Guidelines

### When to Use Colors

- **Primary (Blue):** Links, primary CTAs, accents
- **Secondary (Red):** Navigation, warnings, emphasis
- **Yellow:** Focus states, highlights, attention
- **Muted:** Secondary text, disabled states
- **Success (Green):** Confirmations, available status
- **Warning (Yellow):** Coming soon status
- **Error (Red):** Errors, unavailable status

### Spacing Best Practices

1. Use consistent spacing from the scale
2. Never use custom pixel values
3. Pair spacing with visual weight (fonts, colors)
4. Use negative space to improve readability

### Typography Best Practices

1. Headlines: Oswald for strength and brand
2. Body: Roboto for readability
3. Accent: Crimson Text for emphasis (pull quotes, special sections)
4. Never use more than 3 font families
5. Maintain 1.3+ line height for headings, 1.6+ for body

---

## Implementation

All design system files are located in:

- `assets/scss/_design-tokens.scss` - Variables and mixins
- `assets/scss/_base.scss` - Base typography and resets
- `assets/scss/_layout.scss` - Layout utilities
- `assets/scss/_components.scss` - Component styles
- `_includes/` - Reusable HTML components

### Adding New Components

1. Define component in SCSS under `_components.scss`
2. Create optional include file in `_includes/` for repeated use
3. Document the component here with examples
4. Test across light/dark themes and breakpoints
5. Ensure keyboard accessibility and focus states

---

## Theme Toggle

Users can toggle between light and dark themes using the sun/moon icon in the navigation. The preference is saved to local storage and persists across sessions.

```javascript
// Toggle theme
toggleTheme();

// Current theme
const currentTheme = document.documentElement.getAttribute('data-theme');
```

---

## Questions?

For design system questions or to propose changes, contact Seth Oranburg at [{{ site.author.email }}](mailto:{{ site.author.email }}).
