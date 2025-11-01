gsap.registerPlugin(ScrollToPlugin);

const container = document.querySelector('.scroll-container');
let isScrolling = false;

container.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;

  const direction = e.deltaY > 0 ? 1 : -1;
  const sectionHeight = window.innerHeight;

  const targetScroll = container.scrollTop + direction * sectionHeight;

  gsap.to(container, {
    scrollTo: { y: targetScroll },
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      isScrolling = false;
    }
  });
});
