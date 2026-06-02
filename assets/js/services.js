/* ============================================
   SERVICES PAGE JS — assets/js/services.js
   ============================================ */

/**
 * Switches between Core Services and Environmental Services tabs.
 * Called from onclick on tab buttons in services.html
 * @param {string} tabId  - 'core' | 'env'
 * @param {HTMLElement} el - the clicked button element
 */
function switchTab(tabId, el) {
  /* Deactivate all tab buttons */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  /* Hide all tab panels */
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  /* Activate clicked button */
  el.classList.add('active');
  el.setAttribute('aria-selected', 'true');

  /* Show matching panel */
  const panel = document.getElementById('tab-' + tabId);
  if (panel) {
    panel.classList.add('active');
    /* Re-trigger fade-in for newly shown cards */
    panel.querySelectorAll('.fade-in').forEach(card => {
      card.classList.remove('visible');
      setTimeout(() => card.classList.add('visible'), 50);
    });
  }
}
