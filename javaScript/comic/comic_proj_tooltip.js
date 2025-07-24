document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.svg-container');
    const svgText = document.querySelector('#svg-text');
    
    // Show default text immediately
    gsap.to(svgText, {
        opacity: 1,
        duration: 0.5
    });
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const newText = this.getAttribute('data-text');
            
            gsap.to(svgText, {
                opacity: 0,
                duration: 0.3,
                onComplete: function() {
                    svgText.textContent = newText;
                    gsap.to(svgText, {
                        opacity: 1,
                        duration: 0.5
                    });
                }
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(svgText, {
                opacity: 0,
                duration: 0.3,
                onComplete: function() {
                    svgText.textContent = "Hover over a project to see info!"; // ResetHo to default
                    gsap.to(svgText, {
                        opacity: 1,
                        duration: 0.5
                    });
                }
            });
        });
    });
});