---
layout: page
title: "Search"
permalink: /search/
---

# Search LEP

Search across all pages and resources on the LEP website.

<div class="search-box">
  <input type="search" id="search-input" placeholder="Search pages, essays, events…" aria-label="Search LEP" autocomplete="off" spellcheck="false">
</div>

<div id="search-results" class="search-results" role="region" aria-live="polite" aria-label="Search results"></div>

<style>
.search-box {
  margin: var(--space-xl) 0 var(--space-md);
  max-width: 600px;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.75rem;
  font-size: 1rem;
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg);
  color: var(--text);
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
  font-family: var(--font-body);
}

.search-box::before {
  content: '🔍';
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
}

.search-box input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(109, 172, 222, 0.15);
}

.search-results {
  margin-top: var(--space-lg);
}

.search-result-item {
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-normal), transform var(--transition-normal);
}

.search-result-item:hover {
  border-left-color: var(--yellow);
  transform: translateX(3px);
}

.search-result-item h3 {
  margin: 0 0 var(--space-sm);
  font-size: 1.1rem;
  color: var(--accent);
}

.search-result-item h3 a {
  color: inherit;
  text-decoration: none;
}

.search-result-item h3 a:hover {
  text-decoration: underline;
}

.search-result-item p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.5;
}

.search-result-item mark {
  background: rgba(255, 214, 92, 0.3);
  color: var(--text);
  padding: 0 0.1em;
  border-radius: 2px;
}

.search-hint {
  padding: var(--space-lg);
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  color: var(--muted);
}
</style>

