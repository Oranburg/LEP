# LEP

Working space for the intellectual identity of the Law and Entrepreneurship Program (LEP) at the Catholic University of America Columbus School of Law, directed by Seth Oranburg (effective August 20, 2026) with founding Director Alexander Hoffarth. This repository contains the program's intellectual identity in development. It is not a CUA-authorized site, and nothing on it constitutes a CUA-authorized communication.

Deployed at https://oranburg.law/LEP/.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site runs at http://localhost:4000/LEP/.

## Accessibility

Every image must have descriptive alt text. Headings must descend in order (no skipping levels). Layouts use semantic HTML (`<article>`, `<section>`, `<nav>`, `<main>`). A skip-link is included in default.html.

## Inline term tooltips

Use `{% raw %}{% include term-tooltip.html term="..." definition="..." %}{% endraw %}` to mark specialized terms with a faint dotted underline and click-to-toggle definition popup.

Set `status="violation"` when the tooltip is a style alert (for terms that drift outside the active frame or introduce unnecessary metaphorical imagery).

## Contributing

Pull requests welcome from named collaborators. Open an issue first to discuss scope.

## Design system
This site uses the shared Oranburg design system: the canonical `--og-` tokens, a shared breadcrumb, and a shared footer, maintained at [oranburg.github.io/design-system](https://github.com/Oranburg/oranburg.github.io/tree/main/design-system). Adopted 2026-06-20.
