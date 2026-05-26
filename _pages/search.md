---
layout: page
title: "Search"
permalink: /search/
---

# Search LEP

Search across all pages, posts, and resources on the LEP website.

<div class="search-box">
  <input type="text" id="search-input" placeholder="Search pages, posts, papers..." aria-label="Search LEP">
  <div id="search-results" class="search-results"></div>
</div>

<script>
// Simple search functionality (enhanced with jekyll-search when available)
document.getElementById('search-input').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  
  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }

  // This would be replaced by actual search data from jekyll-search plugin
  console.log('Searching for:', query);
  resultsContainer.innerHTML = `
    <div class="search-hint">
      <p>Searching for: <strong>${query}</strong></p>
      <p><small>Full-text search coming soon with jekyll-search integration.</small></p>
    </div>
  `;
});
</script>

<style>
.search-box {
  margin: 2rem 0;
  max-width: 500px;
}

.search-box input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--bg);
  color: var(--text);
}

.search-box input:focus {
  outline: none;
  border-color: var(--accent);
}

.search-results {
  margin-top: 2rem;
}

.search-hint {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
}
</style>
