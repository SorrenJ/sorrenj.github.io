document.addEventListener('DOMContentLoaded', () => {
    const fadeElement = document.getElementById('fade');
  
    // Fade-out when the page is loaded
    fadeElement.classList.remove('fade-active');
  
    // Attach fade-in effect before navigating
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default navigation
  
        // Ensure the target is the <a> element
        const targetLink = event.currentTarget.href;
  
        fadeElement.classList.add('fade-active'); // Trigger fade-in
        setTimeout(() => {
          window.location.href = targetLink; // Navigate after fade-in
        }, 500); // Match the transition duration
      });
    });
  });
  