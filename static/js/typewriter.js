// Typewriter effect for hero title
document.addEventListener('DOMContentLoaded', function() {
  const heroElement = document.getElementById('hero-typewriter');
  
  if (heroElement && typeof Typewriter !== 'undefined') {
    // Get the title from the data attribute
    const title = heroElement.getAttribute('data-text') || 'What is Radical Politics?';
    
    const typewriter = new Typewriter(heroElement, {
      loop: false,
      delay: 75,
      cursor: '|',
      cursorClassName: 'typewriter-cursor'
    });

    typewriter
      .typeString(title)
      .start();
  }
});
