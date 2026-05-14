// Shared nav and footer for all pages
function getNav(activePage) {
  return `
  <nav>
    <a href="index.html" class="nav-brand">
      <div class="name">Renee Bulwin</div>
      <div class="tagline">Bleed Into Purpose</div>
    </a>
    <button class="nav-toggle" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-menu" id="navMenu">
    <a href="index.html" class="${activePage==='home'?'active':''}">Home</a>
    <a href="about.html" class="${activePage==='about'?'active':''}">About</a>
    <a href="speaking.html" class="${activePage==='speaking'?'active':''}">Speaking</a>
    <a href="programs.html" class="${activePage==='programs'?'active':''}">Programs</a>
    <a href="resources.html" class="${activePage==='resources'?'active':''}">Resources</a>
    <a href="booking.html" class="${activePage==='booking'?'active':''}">Booking</a>
    <a href="booking.html" class="btn-menu">Book a Session</a>
  </div>`;
}

function getFooter() {
  return `
  <footer>
    <div class="footer-brand">
      <div class="name">Renee Bulwin</div>
      <div class="tagline">Bleed Into Purpose</div>
      <div class="quote">"Healing begins the moment someone finally feels seen."</div>
      <div class="footer-email">✉ <a href="mailto:yourname@example.com">yourname@example.com</a></div>
    </div>
    <div class="footer-nav">
      <div class="footer-nav-col">
        <h4>Explore</h4>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="speaking.html">Speaking</a>
        <a href="programs.html">Programs</a>
      </div>
      <div class="footer-nav-col">
        <h4>Connect</h4>
        <a href="resources.html">Resources</a>
        <a href="booking.html">Booking</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Renee Bulwin · Bleed Into Purpose. All rights reserved.</p>
      <p class="footer-disclaimer">This content is for educational and wellness support purposes only. It is not a replacement for therapy, medical care, or crisis support. If you are in crisis, please contact the 988 Suicide & Crisis Lifeline by calling or texting 988.</p>
    </div>
  </footer>`;
}

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const toggle = document.querySelector('.nav-toggle');
  menu.classList.toggle('open');
  toggle.classList.toggle('is-open');
}

function initPage() {
  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Close menu on nav link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navMenu').classList.remove('open');
      document.querySelector('.nav-toggle').classList.remove('is-open');
    });
  });
}
