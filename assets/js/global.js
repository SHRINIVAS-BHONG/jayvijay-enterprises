/* ============================================
   JAYVIJAY ENTERPRISES — GLOBAL JS
   assets/js/global.js
   ============================================ */

/* ── WhatsApp Config ── */
const WA = {
  jay:   { number: '919270975327', name: 'Jay (Sales Division)' },
  vijay: { number: '919270513565', name: 'Vijay (Services Division)' },
  main:  { number: '919370321210', name: 'Jayvijay Enterprises' },
};

/**
 * Opens WhatsApp chat with pre-filled message
 * @param {string} division  - 'jay' | 'vijay' | 'main'
 * @param {string} [msg]     - optional custom message
 */
function openWhatsApp(division, msg) {
  const contact = WA[division] || WA.main;
  const defaultMsg = `Hello ${contact.name}, I would like to enquire about your products/services.`;
  const text = encodeURIComponent(msg || defaultMsg);
  window.open(`https://wa.me/${contact.number}?text=${text}`, '_blank');
}

/* ── Mobile Nav Toggle ── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');
  const links  = document.querySelector('.navbar__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Mark active nav link based on current page
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

/* ── Scroll-based navbar shadow ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,.35)'
    : '0 2px 16px rgba(0,0,0,.25)';
});

/* ── Simple fade-in on scroll (Intersection Observer) ── */
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
    .fade-in.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(el => {
      if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
