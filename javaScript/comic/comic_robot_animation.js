document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create a new object element for animation
    const animContainer = document.getElementById('robot-animation-container');
    const animatedSVG = document.createElement('object');
    animatedSVG.id = 'robot-svg';
    animatedSVG.type = 'image/svg+xml';
    animatedSVG.data = 'assets/svg_anime/robot-hand-shake.svg';
    animatedSVG.style.width = '100%';
    animatedSVG.style.height = '100%';
    animContainer.appendChild(animatedSVG);
    
    const handleSvgLoad = () => {
        try {
            const svgDoc = animatedSVG.contentDocument;
            const robotPath = svgDoc.getElementById('robot-path'); // Ensure this exists in SVG
            
            if (!robotPath) {
                console.error("Robot path not found in SVG");
                return;
            }
            
            const length = robotPath.getTotalLength();
            robotPath.style.strokeDasharray = length;
            robotPath.style.strokeDashoffset = length;
            
            gsap.to(robotPath, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    markers: true, // Remove in production
                    toggleActions: "play none none none"
                }
            });
            
        } catch (error) {
            console.error("Error in SVG animation:", error);
        }
    };
    
    animatedSVG.addEventListener('load', handleSvgLoad);
    animatedSVG.addEventListener('error', () => {
        console.error("Failed to load animated SVG");
    });
});