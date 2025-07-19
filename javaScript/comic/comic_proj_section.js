      // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        document.addEventListener("DOMContentLoaded", function() {
            // Select all SVGs with the 'drawable' class
            const svgs = document.querySelectorAll('.drawable');
            
            // Animate each SVG when scrolled into view
            svgs.forEach((svg, index) => {
                // Get all path elements in the SVG
                const paths = svg.querySelectorAll('path');
                
                // Set initial state for all paths
                gsap.set(paths, {
                    strokeDasharray: 1000,
                    strokeDashoffset: 1000,
                    opacity: 0
                });
                
                // Create a timeline for this SVG
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: svg,
                        start: "top 80%",
                        toggleActions: "play none none none",
                        markers: false // Set to true for debugging
                    }
                });
                
                // Animate each path in sequence
                paths.forEach((path, i) => {
                    tl.to(path, {
                        strokeDashoffset: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, i * 0.2); // Stagger animations
                });
            });
            
            // Optional: Animate the entire section appearance
            gsap.from("#animated-section", {
                scrollTrigger: {
                    trigger: "#animated-section",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });