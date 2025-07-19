// Animation for first section
  const path1 = document.querySelector("#svg1 path");
  gsap.set(path1, {
    strokeDasharray: path1.getTotalLength(),
    strokeDashoffset: path1.getTotalLength()
  });
  
  gsap.to(path1, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#svg1",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Animation for second section - using timeline for sequenced animations
  const path2 = document.querySelector("#svg2 path");
  const text2 = document.querySelector("#svg2 text");
  
  // Set initial states
  gsap.set(path2, {
    strokeDasharray: path2.getTotalLength(),
    strokeDashoffset: path2.getTotalLength()
  });
  gsap.set(text2, { opacity: 0 }); // Ensure text starts invisible
  
  // Create timeline for section 2
  const section2Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none"
    }
  });
  
  // Add animations to timeline
  section2Timeline
    .to(path2, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(text2, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3"); // Slight overlap with path animation



  // Animation for second section - using timeline for sequenced animations
  const path3 = document.querySelector("#svg3 path");
  const text3 = document.querySelector("#svg3 text");
  
  // Set initial states
  gsap.set(path3, {
    strokeDasharray: path3.getTotalLength(),
    strokeDashoffset: path3.getTotalLength()
  });
  gsap.set(text3, { opacity: 0 }); // Ensure text starts invisible
  
  // Create timeline for section 2
  const section3Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none"
    }
  });
  
  // Add animations to timeline
  section3Timeline
    .to(path3, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(text3, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3"); // Slight overlap with path animation
