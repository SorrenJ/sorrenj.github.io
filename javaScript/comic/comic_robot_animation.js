document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    console.log("Robot animation script loaded"); // Debug log
    
    const robotSvg = document.getElementById('robot-svg');
    
    if (!robotSvg) {
        console.error("Robot SVG element not found in DOM");
        return;
    }
    
    // Add temporary styling to make SVG container visible
    const robotSection = document.getElementById('robot-section');
    if (robotSection) {
        robotSection.style.border = "2px solid red";
        robotSection.style.padding = "20px";
        robotSection.style.backgroundColor = "rgba(255,0,0,0.1)";
    }
    
    // Enhanced load handler with error checking
    const handleSvgLoad = () => {
        console.log("SVG loaded, attempting to animate");
        
        try {
            const svgDoc = robotSvg.contentDocument;
            if (!svgDoc) {
                console.error("SVG document not accessible");
                return;
            }
            
            const robotPath = svgDoc.getElementById('robot-path');
            if (!robotPath) {
                console.error("Robot path not found in SVG");
                return;
            }
            
            // Make sure path is visible
            robotPath.style.stroke = "black";
            robotPath.style.strokeWidth = "5px";
            robotPath.style.fill = "none";
            
            const length = robotPath.getTotalLength();
            console.log(`Path length: ${length}`);
            
            // Set initial animation state
            robotPath.style.strokeDasharray = length;
            robotPath.style.strokeDashoffset = length;
            
            // Create animation
            gsap.to(robotPath, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#robot-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    markers: true, // Show scroll trigger markers
                    toggleActions: "play none none none"
                }
            });
            
            console.log("Animation successfully initialized");
            
        } catch (error) {
            console.error("Error in SVG animation:", error);
        }
    };
    
    // Check if already loaded (some browsers cache)
    if (robotSvg.contentDocument) {
        console.log("SVG already loaded");
        handleSvgLoad();
    } else {
        robotSvg.addEventListener('load', handleSvgLoad);
    }
    
    // Error handling
    robotSvg.addEventListener('error', () => {
        console.error("Failed to load SVG file");
    });
    
    // Fallback: Check every 100ms for 3 seconds
    let attempts = 0;
    const checkInterval = setInterval(() => {
        if (robotSvg.contentDocument) {
            clearInterval(checkInterval);
            handleSvgLoad();
        } else if (attempts++ > 30) {
            clearInterval(checkInterval);
            console.warn("SVG load timeout");
        }
    }, 100);
});