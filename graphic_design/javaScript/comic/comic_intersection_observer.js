document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const stackSection = document.querySelector('.card-stack-section');

  // Set up total scroll height
  stackSection.style.height = `${cards.length * 100}vh`;
  stackSection.classList.add('stack-effect');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove .active from all cards
          cards.forEach(card => card.classList.remove('active'));

          // Add .active to the one in view
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  // Observe each individual card
  cards.forEach((card) => observer.observe(card));

  // Smooth scrolling for arrow links
  document.querySelectorAll('.arrow-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll to top on load
  window.scrollTo({ top: 0, behavior: 'auto' });
});
