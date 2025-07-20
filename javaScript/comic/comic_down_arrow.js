document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.querySelector(".bouncing-arrow");
    
    // Debugging checks
    console.log("SVG Element:", arrow);
    if (!arrow) {
        console.error("SVG element not found!");
        return;
    }
    
    // Visual debug marker
    arrow.style.border = "2px solid red";
    console.log("SVG dimensions:", arrow.clientWidth, arrow.clientHeight);
    
    // Test basic visibility
    gsap.set(arrow, { opacity: 1, scale: 1 });
    
    // Only proceed if visible
    if (arrow.clientWidth > 0 && arrow.clientHeight > 0) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(arrow, {
            y: -15,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });
    } else {
        console.warn("SVG has zero dimensions - not animating");
    }
});