// Mobile hamburger menu toggle
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("mobile-nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Homepage header slide-in on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Only run on homepage
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

// Keyboard navigation for dropdown menus
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown > a.dropdown-toggle');
  
  dropdowns.forEach(dropdown => {
    // Handle keyboard navigation (Enter and Space keys)
    dropdown.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = this.getAttribute('aria-expanded') === 'true';
        const newState = !expanded;
        
        // Update ARIA state
        this.setAttribute('aria-expanded', newState);
        
        // Toggle dropdown visibility
        const parent = this.parentElement;
        if (newState) {
          parent.classList.add('open');
          // Focus first menu item
          const firstMenuItem = parent.querySelector('.dropdown-menu a');
          if (firstMenuItem) {
            setTimeout(() => firstMenuItem.focus(), 100);
          }
        } else {
          parent.classList.remove('open');
        }
      }
      
      // Escape key closes dropdown
      if (e.key === 'Escape') {
        this.setAttribute('aria-expanded', 'false');
        this.parentElement.classList.remove('open');
        this.focus();
      }
    });
    
    // Handle click events (for mouse users)
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      this.parentElement.classList.toggle('open');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.setAttribute('aria-expanded', 'false');
        dropdown.parentElement.classList.remove('open');
      });
    }
  });
  
  // Handle keyboard navigation within dropdown menus
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach(menu => {
    const menuItems = menu.querySelectorAll('a');
    
    menuItems.forEach((item, index) => {
      item.addEventListener('keydown', function(e) {
        // Arrow down - focus next item
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextItem = menuItems[index + 1];
          if (nextItem) nextItem.focus();
        }
        
        // Arrow up - focus previous item
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (index === 0) {
            // Return to dropdown toggle
            const toggle = menu.closest('.dropdown').querySelector('.dropdown-toggle');
            toggle.focus();
          } else {
            const prevItem = menuItems[index - 1];
            if (prevItem) prevItem.focus();
          }
        }
        
        // Escape - close menu and return to toggle
        if (e.key === 'Escape') {
          const dropdown = menu.closest('.dropdown');
          const toggle = dropdown.querySelector('.dropdown-toggle');
          toggle.setAttribute('aria-expanded', 'false');
          dropdown.classList.remove('open');
          toggle.focus();
        }
      });
    });
  });
});
