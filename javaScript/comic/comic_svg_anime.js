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
            duration: 2.5,
            ease: "power2.inOut"
          });
        
        // Add rotation animation for "orbits"
gsap.to('#react-svg path', {
  rotation: 360,
  duration: 8,
  repeat: -1,
  ease: "none",
  transformOrigin: "center"
});
        
        }

        if (textElement) {
          gsap.set(textElement, { opacity: 0 });
          gsap.to(textElement, {
            opacity: 1,
            duration: 0.8,
            delay: 0.5
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


function animateReactLogo(svgId, sectionId) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const svgObject = document.getElementById(svgId);
        const svgDoc = svgObject.contentDocument;
        
        if (!svgDoc) {
          console.error("SVG document not loaded for:", svgId);
          return;
        }

        // Animate all paths with strokes
        const paths = svgDoc.querySelectorAll('path[stroke]');
        paths.forEach(path => {
          const length = path.getTotalLength();
          gsap.fromTo(path, 
            { strokeDasharray: length, strokeDashoffset: length, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
          );
        });

        // Continuous rotation (React logo specific)
        gsap.to(paths, {
          rotation: 360,
          duration: 15,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById(sectionId));
}

// Apply to each section
animateSpeech('svg1', 'section1');
animateSpeech('robot-svg', 'section2');
animateSpeech('svg2', 'section2');

animateSpeech('react-svg', 'section3');
animateSpeech('svg3', 'section3');
animateSpeech('svgA', 'sectionA');
animateSpeech('svgB', 'sectionB');
animateSpeech('svgC', 'sectionC');

document.getElementById('svg1').addEventListener('load', function() {
    animateSpeech('svg1', 'section1');
});

document.getElementById('react-svg').addEventListener('load', function() {
  animateReactLogo('react-svg', 'section3');
});