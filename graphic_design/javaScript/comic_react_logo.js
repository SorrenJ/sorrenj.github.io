document.getElementById('react-svg').addEventListener('load', function() {
  animateReactLogo('react-svg', 'section3');
});

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