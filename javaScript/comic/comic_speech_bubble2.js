function animateSpeech(svgId, sectionId) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const svgObject = document.getElementById(svgId);
        const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
        if (!svgDoc) return;
        
        const path = svgDoc.querySelector('path');
        const textElement = svgDoc.querySelector('text');

        if (path) {
          gsap.set(path, {
            strokeDasharray: path.getTotalLength(),
            strokeDashoffset: path.getTotalLength(),
            opacity: 0
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut"
          });
        }

        if (textElement) {
          gsap.set(textElement, { opacity: 0 });
          gsap.to(textElement, {
            opacity: 1,
            duration: 0.8,
            delay: 0.3
          });
        }

        // Optional: unobserve so it only plays once
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  const section = document.getElementById(sectionId);
  if (section) observer.observe(section);
}

// Apply to each section
animateSpeech('svg1', 'section1');
animateSpeech('svg2', 'section2');
animateSpeech('svg3', 'section3');
