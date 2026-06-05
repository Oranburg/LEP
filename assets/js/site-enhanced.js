// ============================================================================
// Enhanced Site JavaScript
// Theme toggle, navigation, back-to-top, reading progress, scroll-reveal, search
// ============================================================================

// ========== Theme Toggle with Smooth Transitions ==========
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  
  // Apply transition
  html.style.transition = 'background-color var(--transition-normal), color var(--transition-normal)';
  
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel(next);
  
  // Remove transition after animation completes
  setTimeout(() => {
    html.style.transition = '';
  }, 300);
}

function updateToggleLabel(theme) {
  const btns = document.querySelectorAll('.theme-toggle');
  btns.forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

// Initialize theme on page load
(function () {
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateToggleLabel(theme);
})();

// ========== Navigation Highlighting ==========
(function () {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.site-nav a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' ? path === '/' : path.includes(href) && href !== '/') {
      link.setAttribute('aria-current', 'page');
    }
  });
})();

// ========== Hamburger Menu Toggle ==========
(function () {
  const toggleBtn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      this.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking links
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', false);
        toggleBtn.focus();
      }
    });
  }
})();

// ========== Abstract Expand/Collapse ==========
function toggleAbstract(element, ev) {
  const e = ev || window.event;
  if (e && e.target && e.target.tagName === 'A') return;
  element.classList.toggle('expanded');
  const indicator = element.querySelector('.expand-indicator');
  if (indicator) {
    indicator.textContent = element.classList.contains('expanded') ? '\u2212' : '+';
  }
}

function handleArticleKey(event, element) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleAbstract(element);
  }
}

// ========== Back to Top Button ==========
(function () {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

// ========== Reading Progress Bar ==========
(function () {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;

  // Only show on content pages (not homepage)
  const isHomepage = window.location.pathname.replace(/\/$/, '') === 
    (document.querySelector('link[rel="canonical"]') && '') || 
    window.location.pathname === '/' || 
    window.location.pathname === '/LEP/' ||
    window.location.pathname === '/LEP';

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

// ========== Scroll-Reveal Animations ==========
(function () {
  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  // Add .reveal to cards, stat boxes, event cards, and audience cards
  const selectors = [
    '.audience-card',
    '.card',
    '.stat-box',
    '.event-card',
    '.callout',
    '.related-item',
    '.past-event'
  ];

  const elements = document.querySelectorAll(selectors.join(', '));
  elements.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

// ========== Accessibility Improvements ==========
(function () {
  const focusVisibleSupported = () => {
    try {
      const element = document.createElement('input');
      return element.matches(':focus-visible') !== false;
    } catch (e) {
      return false;
    }
  };

  if (!focusVisibleSupported()) {
    const style = document.createElement('style');
    style.textContent = `
      ::-moz-focus-inner { border: 0; }
      :focus { outline: 2px solid var(--focus-color); outline-offset: 2px; }
    `;
    document.head.appendChild(style);
  }
})();

// ========== Lazy Load Images ==========
(function () {
  if ('IntersectionObserver' in window) {
    const imageElements = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    imageElements.forEach(img => imageObserver.observe(img));
  }
})();

// ========== Client-Side Search ==========
(function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  if (!searchInput || !searchResults) return;

  let searchData = null;

  // Load search index
  function loadSearchData() {
    if (searchData !== null) return Promise.resolve(searchData);
    const baseUrl = document.querySelector('link[rel="canonical"]')
      ? new URL(document.querySelector('link[rel="canonical"]').href).pathname.replace(/[^/]*$/, '')
      : '/';
    // Determine site base (handles /LEP/ prefix on GitHub Pages)
    const siteBase = document.documentElement.dataset.siteBase ||
      (window.location.pathname.startsWith('/LEP') ? '/LEP' : '');
    return fetch(siteBase + '/search.json')
      .then(r => r.json())
      .then(data => { searchData = data; return data; })
      .catch(() => { searchData = []; return []; });
  }

  function highlight(text, query) {
    if (!query) return text;
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('(' + safe + ')', 'gi'), '<mark>$1</mark>');
  }

  function renderResults(results, query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-hint"><p>No results found for <strong>' +
        query.replace(/</g, '&lt;') + '</strong>.</p></div>';
      return;
    }
    searchResults.innerHTML = results.slice(0, 12).map(item => {
      const titleHL = highlight(item.title || '', query);
      const excerptHL = highlight((item.excerpt || '').slice(0, 200), query);
      return '<div class="search-result-item">' +
        '<h3><a href="' + item.url + '">' + titleHL + '</a></h3>' +
        (excerptHL ? '<p>' + excerptHL + '…</p>' : '') +
        '</div>';
    }).join('');
  }

  function doSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 2) { renderResults([], q); return; }
    loadSearchData().then(data => {
      const results = data.filter(item => {
        const haystack = ((item.title || '') + ' ' + (item.excerpt || '') + ' ' + (item.content || '')).toLowerCase();
        return haystack.includes(q);
      });
      renderResults(results, q);
    });
  }

  let debounceTimer;
  searchInput.addEventListener('input', e => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => doSearch(e.target.value), 200);
  });

  // Pre-load on focus
  searchInput.addEventListener('focus', () => loadSearchData(), { once: true });
})();

// ========== Inline Term Tooltips ==========
(function () {
  const termTriggers = document.querySelectorAll('.term-tooltip');
  if (!termTriggers.length) return;

  const closeAllTooltips = (exceptTrigger) => {
    termTriggers.forEach(trigger => {
      if (exceptTrigger && trigger === exceptTrigger) return;
      const popup = trigger.nextElementSibling;
      if (!popup || !popup.classList.contains('term-tooltip-popup')) return;
      trigger.setAttribute('aria-expanded', 'false');
      popup.hidden = true;
    });
  };

  termTriggers.forEach(trigger => {
    const popup = trigger.nextElementSibling;
    if (!popup || !popup.classList.contains('term-tooltip-popup')) return;

    trigger.addEventListener('click', event => {
      event.stopPropagation();
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      closeAllTooltips(trigger);

      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        popup.hidden = false;
      }
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.term-tooltip-wrapper')) {
      closeAllTooltips();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeAllTooltips();
    }
  });
})();

// ========== Print Styles ==========
window.addEventListener('beforeprint', () => {
  document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing');
});

// ========== Console Message ==========
console.log('%cLEP — Law and Entrepreneurship Program', 'font-size: 1.5rem; font-weight: bold; color: #6DACDE;');
console.log('For more information, visit: https://oranburg.law/LEP');
