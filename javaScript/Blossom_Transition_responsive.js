// Blossom animation for section4
const blossoms = gsap.utils.toArray(".blossom-anime");

// Set initial positions and properties
gsap.set(blossoms, {
  x: () => gsap.utils.random(-200, 200),
  y: () => gsap.utils.random(-100, 100),
  rotation: () => gsap.utils.random(0, 360),
  scale: () => gsap.utils.random(0.5, 1.5),
  opacity: 0
});

// Create animation timeline for blossoms
const blossomTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play none none none"
  }
});

// Add animations for each blossom
blossoms.forEach((blossom, i) => {
  // Random duration between 5-10 seconds
  const duration = gsap.utils.random(5, 10);
  
  // Initial fade in
  blossomTimeline.to(blossom, {
    opacity: () => gsap.utils.random(0.3, 0.8),
    duration: 1,
    ease: "power1.out"
  }, i * 0.2);
  
  // Continuous floating animation
  blossomTimeline.to(blossom, {
    x: () => gsap.utils.random(-300, 300),
    y: () => gsap.utils.random(-200, 200),
    rotation: () => gsap.utils.random(-360, 360),
    duration: duration,
    ease: "none",
    repeat: -1,
    yoyo: true
  }, i * 0.2);
  
  // Gentle pulsing scale
  blossomTimeline.to(blossom, {
    scale: () => gsap.utils.random(0.8, 1.2),
    duration: duration * 0.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  }, i * 0.2);
});