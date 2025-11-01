// svgPathAnimation.js
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a master timeline that's paused
    const masterTL = gsap.timeline({ paused: true });
    
    // Only handle object elements with specific IDs (fin, face, sorren, pet)
    ['fin', 'face', 'sorren', 'pet'].forEach(id => {
        const obj = document.getElementById(id);
        if (obj) {
            if (obj.contentDocument) {
                setupObjectAnimation(obj, masterTL);
            } else {
                obj.addEventListener('load', function() {
                    setupObjectAnimation(this, masterTL);
                });
            }
        }
    });
    
    // Play the master timeline when section4 comes into view
    ScrollTrigger.create({
        trigger: "#section4",
        start: "top center",
        onEnter: () => masterTL.play(),
        // Optional: Reset if user scrolls back up
        onLeaveBack: () => masterTL.pause().progress(0)
    });
});

function setupObjectAnimation(objectElement, masterTL) {
    const svgDoc = objectElement.getSVGDocument();
    if (!svgDoc) return;
    
    const path = svgDoc.querySelector('path');
    const text = svgDoc.querySelector('text');
    
    if (!path) return;
    
    // Set initial state
    const length = path.getTotalLength();
    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
    });
    
    if (text) {
        gsap.set(text, { opacity: 0 });
    }
    
    // Add animation to master timeline
    masterTL.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut"
    }, 0); // Start all animations at the same time
    
    // Add text animation if exists
    if (text) {
        masterTL.to(text, {
            opacity: 1,
            duration: 0.8,
            delay: 0.3
        }, 0);
    }
}