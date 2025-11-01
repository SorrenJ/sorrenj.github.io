document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('GSAP or ScrollTrigger not loaded!');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const marketPath = document.getElementById('market-path');
  const section = document.getElementById('sectionA');

  function waitForPathLength(callback, retries = 20) {
    const pathLength = marketPath.getTotalLength();
    if (pathLength > 0 || retries <= 0) {
      callback(pathLength);
    } else {
      requestAnimationFrame(() => waitForPathLength(callback, retries - 1));
    }
  }

  waitForPathLength((pathLength) => {
    console.log("SVG path length:", pathLength);

    // Initialize stroke dash
    marketPath.style.strokeDasharray = pathLength;
    marketPath.style.strokeDashoffset = pathLength;
    marketPath.style.opacity = 1;

    // Create scroll animation
    gsap.to(marketPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true
      }
    });
  });
});
