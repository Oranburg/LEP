// Theme toggle (matching equally-poor: sun/moon SVG icons in nav)
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel(next);
}

function updateToggleLabel(theme) {
  var btns = document.querySelectorAll('.theme-toggle');
  btns.forEach(function (btn) {
    btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
  });
}

// Initialize toggle label on load
(function () {
  var theme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateToggleLabel(theme);
})();

// Highlight the current nav link based on the page path
(function () {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.site-nav a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === '/' ? path === '/' : path.indexOf(href) === 0) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();

// Article abstract expand/collapse
function toggleAbstract(element, ev) {
  var e = ev || window.event;
  if (e && e.target && e.target.tagName === 'A') return;
  element.classList.toggle('expanded');
  var indicator = element.querySelector('.expand-indicator');
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

// Catholic / Secular framing toggle on program pages
(function () {
  var tabs = document.querySelectorAll('.framing-tab');
  if (!tabs.length) return;

  function selectFraming(frame) {
    document.querySelectorAll('.framing-tab').forEach(function (t) {
      t.classList.toggle('active', t.dataset.frame === frame);
      t.setAttribute('aria-selected', t.dataset.frame === frame ? 'true' : 'false');
    });
    document.querySelectorAll('.framing-content').forEach(function (c) {
      if (c.dataset.frame === frame) {
        c.removeAttribute('hidden');
      } else {
        c.setAttribute('hidden', '');
      }
    });
    try { localStorage.setItem('lep-framing', frame); } catch (e) {}
  }

  // Restore preference; default to catholic
  var saved = null;
  try { saved = localStorage.getItem('lep-framing'); } catch (e) {}
  if (saved === 'catholic' || saved === 'secular') {
    selectFraming(saved);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      selectFraming(tab.dataset.frame);
    });
  });
})();

// Lineage diagram figure modals
window.openFig = function (slug) {
  var dlg = document.getElementById('fig-' + slug);
  if (!dlg) {
    console.warn('No figure dialog for slug:', slug);
    return;
  }
  if (typeof dlg.showModal === 'function') {
    dlg.showModal();
  } else {
    // Fallback for older browsers
    dlg.setAttribute('open', '');
  }
};

// Close dialog on backdrop click
document.addEventListener('click', function (e) {
  if (e.target && e.target.tagName === 'DIALOG' && e.target.classList.contains('figure-dialog')) {
    e.target.close();
  }
});
