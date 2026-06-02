/* ============================================
   HOME PAGE JS — assets/js/home.js
   NOTE: Tab switcher for service overview on home page
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* Animated counter for hero stats */
  const counters = document.querySelectorAll('.stat-num');
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const raw = el.textContent.trim();
      /* Only animate purely numeric values */
      const num = parseInt(raw.replace(/\D/g, ''), 10);
      if (!num || num > 9999) return;
      let current = 0;
      const step  = Math.ceil(num / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= num) { el.textContent = raw; clearInterval(timer); return; }
        /* preserve suffix like +, % */
        const suffix = raw.replace(/[\d]/g, '');
        el.textContent = current + suffix;
      }, 35);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => countObserver.observe(c));
});
