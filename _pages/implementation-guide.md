---
layout: page
title: "Implementation Guide - Codebase Improvements"
permalink: /implementation-guide/
---

# LEP Codebase Improvements - Implementation Guide

This document outlines all the enhancements implemented to the LEP website codebase to improve efficiency, navigation, appearance, and maintainability.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Changes](#architecture-changes)
3. [New Features](#new-features)
4. [Component System](#component-system)
5. [Getting Started](#getting-started)
6. [Migration Notes](#migration-notes)

---

## Overview

The codebase has been comprehensively refactored into six major phases:

### Phase 1: CSS Architecture & Foundations ✅
Converted monolithic CSS to modular SCSS with standardized design tokens, normalized breakpoints, and CSS layers for predictable cascade management.

### Phase 2: Template Components ✅
Created reusable Jekyll includes for common UI patterns, enabling DRY (Don't Repeat Yourself) template development.

### Phase 3: Content Readability & Navigation ✅
Added table of contents, breadcrumbs, reading time estimates, related content, and visual dividers for improved navigation and discoverability.

### Phase 4: Visual Improvements ✅
Created event cards, status badges, enhanced hover states, and improved focus indicators for better visual hierarchy and accessibility.

### Phase 5: Large Projects - Diagrams & Interactive Elements ✅
Added interactive Mermaid diagrams for doctrinal lineage, tradition comparison maps, and search functionality.

### Phase 6: Final Polish ✅
Implemented service worker for offline support, lazy loading for images, optimized font loading, and comprehensive accessibility enhancements.

---

## Architecture Changes

### SCSS Modular Structure

The CSS has been reorganized from a single 1,956-line file into 12 specialized modules with clear separation of concerns:

```
assets/scss/
├── main.scss                    # Master import file with @layer cascade
├── _design-tokens.scss          # Colors, typography, spacing, breakpoints
├── _base.scss                   # Typography, resets, semantic HTML
├── _layout.scss                 # Layout utilities, grid, flexbox, back-to-top
├── _components.scss             # UI components (buttons, cards, badges)
├── _footer.scss                 # Footer-specific styles
├── _utilities.scss              # Margin, padding, display utilities
├── _prose.scss                  # Article content, posts, metadata
├── _forms.scss                  # Form elements, inputs, validation
├── _tables.scss                 # Table layouts and styling
├── _media.scss                  # Images, galleries, embeds
└── _accessibility.scss          # Focus states, keyboard nav, high contrast
```

### Standardized Breakpoints

All media queries now use consistent, named breakpoints:

```scss
$breakpoint-sm:   640px;   // Mobile
$breakpoint-md:   768px;   // Tablet
$breakpoint-lg:   1024px;  // Desktop
$breakpoint-xl:   1280px;  // Large desktop

// Usage:
@include respond-to('md') {
  // Styles for viewport ≤ 768px
}
```

### CSS Layers (Cascade Management)

`main.scss` uses `@layer` to establish a predictable cascade order:

```scss
@layer tokens, base, layout, components, prose, forms, tables, media, footer, utilities, accessibility;
```

This prevents specificity wars and makes overrides intuitive.

### Design Tokens

All colors, typography, spacing, and timing are defined as CSS custom properties:

```css
:root {
  /* Colors */
  --blue-deep: #0A3255;
  --accent-red: #B21F2C;
  --yellow: #FFD65C;
  
  /* Spacing scale */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  
  /* Transitions */
  --transition-normal: 200ms ease-out;
  
  /* Breakpoints (for JS use) */
  --breakpoint-md: 768px;
}
```

This enables:
- Consistent theming across light/dark modes
- Easy global adjustments
- JavaScript access to design values

---

## New Features

### 1. Enhanced Navigation

**Breadcrumbs**
- Automatically generated based on page URL
- Improves navigation for nested pages
- Include: `{% include breadcrumbs.html %}`

**Secondary Navigation Footer**
- Provides discovery of intellectual framework pages
- Appears above copyright footer

**Table of Contents**
- Auto-generated for pages >3000 characters
- Sticky positioning with scroll highlighting
- Include: `{% include table-of-contents.html %}`

### 2. Content Enhancements

**Reading Time Estimates**
- Calculated on page generation
- Helps readers decide whether to continue
- Include: `{% include reading-time.html %}`

**Page Metadata**
- Date, author, tags, reading time
- Consistent formatting across pages
- Include: `{% include page-meta.html %}`

**Related Content**
- Automatically finds related pages by tags
- Encourages exploration
- Include: `{% include related-content.html %}`

### 3. Visual Components

**Event Cards**
- Status badges (Available, Coming Soon, Ended)
- Date, location, capacity
- Registration links
- Classes: `event-card`, `event-status event-status--available`

**Status Badges**
- Color-coded status indicators
- Include: `{% include status-badge.html status="available" %}`

**Callout Boxes**
- Info, warning, success, danger types
- Include: `{% include callout.html type="info" title="Note" %}`

**Reusable Cards**
- Base card component with optional accent border
- Include: `{% include card.html title="Title" text="Description" %}`

### 4. Accessibility Improvements

**Keyboard Navigation**
- All interactive elements are keyboard accessible
- Escape key closes menus
- Tab order follows logical reading order

**Focus States**
- 2px yellow outline on all interactive elements
- Consistent styling across light/dark themes
- 2px offset for visibility

**Semantic HTML**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy
- ARIA labels on interactive elements

**High Contrast**
- Light mode: WCAG AAA compliant (7:1+ contrast ratio)
- Dark mode: WCAG AAA for body text
- Colors tested for color-blind accessibility

### 5. Performance Features

**Service Worker**
- Caches critical pages and assets
- Network-first for HTML, cache-first for assets
- Enables offline navigation
- Automatically registered on page load

**Lazy Loading**
- Images load on demand (intersection observer)
- Reduces initial page load
- Implementation: `data-src` attribute

**Font Display Swap**
- `font-display: swap` prevents FOIT
- System fonts display while Google Fonts load
- Improves perceived performance

### 6. Interactive Features

**Mermaid Diagrams**
- Timeline visualizations
- Relationship diagrams
- Process flows
- Enable with `mermaid: true` in frontmatter

**Back-to-Top Button**
- Fixed position, appears after scrolling 300px
- Smooth scroll animation
- Keyboard accessible
- Implemented via JavaScript

**Theme Toggle with Smooth Transitions**
- Fade transition between light/dark
- Saved to localStorage
- Respects system preference on first visit

---

## Component System

### Creating Reusable Components

Components are Jekyll includes stored in `_includes/`:

```liquid
<!-- Usage -->
{% include card.html title="Title" text="Description" accent=true %}

<!-- Definition (_includes/card.html) -->
<div class="card {% if include.accent %}card--accent{% endif %}">
  {% if include.title %}<h3>{{ include.title }}</h3>{% endif %}
  {% if include.text %}<p>{{ include.text }}</p>{% endif %}
</div>
```

### Available Components

| Component | File | Usage |
|-----------|------|-------|
| Card | `card.html` | `{% include card.html title="..." %}` |
| Breadcrumbs | `breadcrumbs.html` | Auto-included in page layout |
| Table of Contents | `table-of-contents.html` | Auto-included in page layout |
| Reading Time | `reading-time.html` | `{% include reading-time.html %}` |
| Related Content | `related-content.html` | `{% include related-content.html %}` |
| Page Meta | `page-meta.html` | `{% include page-meta.html %}` |
| Status Badge | `status-badge.html` | `{% include status-badge.html status="available" %}` |
| Callout | `callout.html` | `{% include callout.html type="info" %}` |
| Header | `header-updated.html` | Used in layout |
| Nav | `nav-updated.html` | Used in layout |
| Footer | `footer-updated.html` | Used in layout |

---

## Getting Started

### Local Development Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Start development server:**
   ```bash
   bundle exec jekyll serve --incremental
   ```

3. **Visit site:**
   ```
   http://localhost:4000/LEP/
   ```

### Configuration Files

**`_config.yml`** - Main site configuration
- SCSS compilation settings
- Plugin configurations
- Design system settings

**`Gemfile`** - Ruby dependencies
- Jekyll and plugins
- Sass compiler

**`assets/scss/main.scss`** - CSS entry point
- Layer definitions
- Module imports

### Building for Production

```bash
# GitHub Pages handles compilation automatically
bundle exec jekyll build
```

The `_site/` directory contains the static site ready for deployment.

---

## Migration Notes

### From Old CSS to New SCSS

The original `assets/css/main.css` is still present but the site now compiles from `assets/scss/main.scss`.

**Compilation Process:**
1. Jekyll processes `assets/scss/main.scss`
2. Sass compiler generates `assets/css/main.css` (compressed)
3. Both files should exist; Jekyll CSS in layout points to compiled `main.css`

### Browser Support

- Modern browsers (ES6+): Full support
- IE 11: No support for CSS custom properties, service workers
- Mobile: Full support (Safari 12+, Chrome, Firefox, Edge)

### Updating Styles

To modify existing styles:

1. **Locate the appropriate SCSS file** based on the component
2. **Edit the file** in `assets/scss/`
3. **Styles recompile** automatically (incremental mode)
4. **No need to edit `main.css`** - it's generated

Example:
```scss
// To modify button styles, edit assets/scss/_components.scss
.btn {
  padding: 0.75rem 1.5rem;  // Change this
  transition: all var(--transition-normal);
}
```

### Adding New Components

1. Create SCSS in appropriate module or new `_component-name.scss`
2. Create Jekyll include in `_includes/component-name.html`
3. Import in `main.scss` if new file
4. Document in this guide

---

## Resources

### Design System Documentation
- Full design system details: [/design-system/](/design-system/)

### New Content Pages
- Doctrinal Timeline: [/lineage-timeline/](/lineage-timeline/)
- Tradition Comparison: [/traditions-comparison/](/traditions-comparison/)
- Events: [/events/](/events/)
- Search: [/search/](/search/)

### Developer Tools
- Jekyll Documentation: https://jekyllrb.com/
- Sass Documentation: https://sass-lang.com/
- Mermaid Diagrams: https://mermaid.js.org/

---

## Support

For questions about the implementation:
1. Check the Design System page for tokens and guidelines
2. Review existing component implementations in `_includes/`
3. Refer to SCSS comments for specific styling decisions
4. Contact Seth Oranburg at [{{ site.author.email }}](mailto:{{ site.author.email }})

---

**Last Updated:** May 26, 2026  
**Implementation Status:** Complete ✅
