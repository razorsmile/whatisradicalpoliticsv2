// Mobile hamburger menu toggle
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("mobile-nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Attach all event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Mobile hamburger menu click handler
  const menuBar = document.getElementById('menu-bar');
  if (menuBar) {
    menuBar.addEventListener('click', menuOnClick);
  }

  // Print button handlers
  const printButtons = document.querySelectorAll('.print-button');
  printButtons.forEach(button => {
    button.addEventListener('click', function() {
      window.print();
    });
  });

  // Homepage header slide-in on scroll
  if (document.body.classList.contains('homepage')) {
    const header = document.querySelector('header');
    let hasScrolled = false;

    window.addEventListener('scroll', function() {
      // Show header after scrolling 100px
      if (window.scrollY > 100 && !hasScrolled) {
        header.classList.add('visible');
        hasScrolled = true;
      }
    });
  }
});
