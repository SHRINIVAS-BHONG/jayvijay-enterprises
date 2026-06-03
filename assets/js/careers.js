/* ============================================
   CAREERS PAGE JS — assets/js/careers.js
   ============================================ */

/**
 * Email address to send job applications to.
 */
const APPLICATION_EMAIL = 'mangaldarsewad86@gmail.com';

/**
 * Opens email client with a pre-filled job application message.
 * Called from "Apply via Email" buttons on job cards.
 * @param {string} position - job title string
 */
function applyViaEmail(position) {
  const subject = encodeURIComponent(`Job Application: ${position}`);
  const body = encodeURIComponent(
    `Hello,\n\n` +
    `I would like to apply for the position of ${position} at Jayvijay Enterprises.\n\n` +
    `Please let me know the next steps. Thank you!`
  );
  window.location.href = `mailto:${APPLICATION_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Handles the full application form submission.
 * Builds a detailed email from all form fields.
 * @param {Event} e - form submit event
 */
function submitApplication(e) {
  e.preventDefault();

  const name     = document.getElementById('app-name').value.trim();
  const mobile   = document.getElementById('app-mobile').value.trim();
  const position = document.getElementById('app-position').value;
  const exp      = document.getElementById('app-exp').value;
  const edu      = document.getElementById('app-edu').value.trim();
  const msg      = document.getElementById('app-msg').value.trim();

  if (!name || !mobile || !position) {
    alert('Please fill in your Name, Mobile Number, and Position.');
    return;
  }

  const subject = encodeURIComponent(`Job Application: ${position} - ${name}`);
  const body = encodeURIComponent(
    `Job Application — Jayvijay Enterprises\n\n` +
    `Name: ${name}\n` +
    `Mobile: ${mobile}\n` +
    `Position: ${position}\n` +
    `Experience: ${exp}\n` +
    `Education: ${edu || 'Not mentioned'}\n\n` +
    `About Me:\n${msg || 'Not provided'}\n\n` +
    `(Sent from Jayvijay Enterprises Careers Page)`
  );
  window.location.href = `mailto:${APPLICATION_EMAIL}?subject=${subject}&body=${body}`;
}
