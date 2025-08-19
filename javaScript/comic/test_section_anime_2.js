document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector('.scroll-container');

  document.querySelectorAll('.draw-path').forEach(path => {
    const pathLength = path.getTotalLength();

    // setup
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 0
    });

    // animate
    gsap.to(path, {
      scrollTrigger: {
        trigger: path.closest('.snap-section'),
        scroller: scrollContainer, 
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true
      },
      strokeDashoffset: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    });
  });
});
