document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  const scrollContainer = document.querySelector('.scroll-container');

  document.querySelectorAll('.draw-path').forEach(path => {
    gsap.set(path, {
      drawSVG: "0%",
      opacity: 0
    });

    gsap.to(path, {
      scrollTrigger: {
        trigger: path.closest('.snap-section'),
        scroller: scrollContainer, // 🧠 key fix
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true // uncomment to debug
      },
      drawSVG: "100%",
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    });
  });
});
