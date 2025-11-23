// Minimal, dependency-free mobile burger menu logic.
// Assumes: 
//   1. A button with id="burger"
//   2. A nav container with id="mobile-nav"
//   3. CSS handles visibility with a class like ".open"

(function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mobile-nav');

  if (!burger || !nav) return;

  let open = false;

  const toggle = () => {
    open = !open;
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', toggle);

  // Close menu when clicking a link
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      open = false;
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on resize above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && open) {
      open = false;
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
