document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('GSAP or ScrollTrigger not loaded!');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const marketPath = document.getElementById('market-path');
  const sectionA = document.getElementById('sectionA');

  // Aggressive fallback: delay setup to ensure SVG is fully rendered
  setTimeout(() => {
    try {
      const pathLength = marketPath.getTotalLength();

      marketPath.style.strokeDasharray = pathLength;
      marketPath.style.strokeDashoffset = pathLength;
      marketPath.style.opacity = 1;

      gsap.to(marketPath, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionA,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      });

    } catch (error) {
      console.error("Could not initialize SVG path animation:", error);
    }
  }, 150); // 150ms delay to ensure proper layout
});
