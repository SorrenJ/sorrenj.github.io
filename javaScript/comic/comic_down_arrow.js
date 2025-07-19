gsap.registerPlugin(ScrollTrigger);

 // Create bouncing animation
        gsap.to(".bouncing-arrow", {
            y: -15, // Move up
            duration: 1,
            opacity: 0.6, // Slightly more opaque at peak
            yoyo: true, // Makes the animation reverse
            repeat: -1, // Infinite repeat
            ease: "sine.inOut" // Bouncy easing
        });

        // Optional: Add hover effect via GSAP instead of CSS
        document.querySelector(".bouncing-arrow").addEventListener("mouseenter", () => {
            gsap.to(".bouncing-arrow", { opacity: 1, duration: 0.3 });
        });
        document.querySelector(".bouncing-arrow").addEventListener("mouseleave", () => {
            gsap.to(".bouncing-arrow", { opacity: 0.4, duration: 0.3 });
        });
