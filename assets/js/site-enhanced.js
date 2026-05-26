// ============================================================================
// Enhanced Site JavaScript
// Theme toggle, navigation, back-to-top, and improved interactivity
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
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

// ========== Table of Contents Highlighting ==========
(function () {
  const toc = document.querySelector('.table-of-contents');
  if (!toc) return;

  const headings = document.querySelectorAll('h2, h3');
  const links = toc.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    headings.forEach(heading => {
      const sectionTop = heading.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
        current = heading.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
})();

// ========== Accessibility Improvements ==========
// Add focus-visible polyfill for better keyboard navigation
(function () {
  const focusVisibleSupported = () => {
    const element = document.createElement('input');
    return element.matches(':focus-visible') !== false;
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

// ========== Search Functionality (if search plugin installed) ==========
(function () {
  const searchBox = document.querySelector('.search-box');
  if (!searchBox) return;

  const searchInput = searchBox.querySelector('input');
  const searchResults = document.createElement('div');
  searchResults.className = 'search-results';
  searchBox.appendChild(searchResults);

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    // Simple search (would be enhanced with actual search data)
    // This is a placeholder for jekyll-search integration
    console.log('Searching for:', query);
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
