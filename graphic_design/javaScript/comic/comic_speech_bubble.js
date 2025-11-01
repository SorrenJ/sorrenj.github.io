// Animation for first section

gsap.registerPlugin(ScrollTrigger);

document.getElementById('svg1').addEventListener('load', function() {
  const svgDoc = this.getSVGDocument();
  const path1 = svgDoc.querySelector('path');
  
  // Set initial styles
  gsap.set(path1, {
    strokeDasharray: path1.getTotalLength(),
    strokeDashoffset: path1.getTotalLength(),
    opacity: 0 // Set initial opacity to 0
  });
  
  // Create the animation
  gsap.to(path1, {
    strokeDashoffset: 0,
    opacity: 1, // Animate opacity to 1
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#svg1",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });
});



document.getElementById('svg2').addEventListener('load', function() {
  const svgDoc = this.getSVGDocument();
  const path2 = svgDoc.querySelector('path');
  const textElement2 = svgDoc.querySelector('text');

  // Set initial styles
  gsap.set(path2, {
        strokeDasharray: path2.getTotalLength(),
    strokeDashoffset: path2.getTotalLength(),
    opacity: 0 // Start hidden
  });

  gsap.set(textElement2, { opacity: 0 });
  
  // Animate the speech bubble (fade in + optional stroke animation)
  gsap.to(path2, {
      strokeDashoffset: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#svg2",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Animate text (delayed slightly after the bubble appears)
  gsap.to(textElement2, {
    opacity: 1,
    duration: 0.8,
    delay: 0.3, // Short delay after the bubble
    scrollTrigger: {
      trigger: "#svg2",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none"
    }
  });
});
document.getElementById('svg3').addEventListener('load', function() {
  const svgDoc = this.getSVGDocument();
  const path3 = svgDoc.querySelector('path');
  const textElement3 = svgDoc.querySelector('text');

  // Set initial styles
  gsap.set(path3, {
        strokeDasharray: path3.getTotalLength(),
    strokeDashoffset: path3.getTotalLength(),
    opacity: 0 // Start hidden
  });

  gsap.set(textElement3, { opacity: 0 });
  
  // Animate the speech bubble (fade in + optional stroke animation)
  gsap.to(path3, {
      strokeDashoffset: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#svg3",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Animate text (delayed slightly after the bubble appears)
  gsap.to(textElement3, {
    opacity: 1,
    duration: 0.8,
    delay: 0.3, // Short delay after the bubble
    scrollTrigger: {
      trigger: "#svg3",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none"
    }
  });
});

document.getElementById('svgD').addEventListener('load', function() {
  const svgDoc = this.getSVGDocument();
  const path3 = svgDoc.querySelector('path');
  const textElement3 = svgDoc.querySelector('text');

  // Set initial styles
  gsap.set(path3, {
        strokeDasharray: path3.getTotalLength(),
    strokeDashoffset: path3.getTotalLength(),
    opacity: 0 // Start hidden
  });

  gsap.set(textElement3, { opacity: 0 });
  
  // Animate the speech bubble (fade in + optional stroke animation)
  gsap.to(path3, {
      strokeDashoffset: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#svg3",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });

  // Animate text (delayed slightly after the bubble appears)
  gsap.to(textElement3, {
    opacity: 1,
    duration: 0.8,
    delay: 0.3, // Short delay after the bubble
    scrollTrigger: {
      trigger: "#svg3",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none none"
    }
  });
});