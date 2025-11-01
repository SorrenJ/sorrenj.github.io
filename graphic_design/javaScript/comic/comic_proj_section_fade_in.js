document.addEventListener('DOMContentLoaded', function() {
    // Target the section you want to observe
    const section = document.querySelector('#section4');
    
    // Elements you want to fade in
    const fadeElements = [
        ...section.querySelectorAll('.left-column .svg-container'),
        ...section.querySelectorAll('.right-column .svg-container'),
        section.querySelector('.middle-column h2'),
        section.querySelector('.proj_tattle')
    ];
    
    // Initially set all elements to be transparent
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease-in-out';
    });
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When section is in view, fade in elements one by one
                fadeElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                    }, index * 100); // Stagger the animations
                });
                
                // Optional: Unobserve after animating to prevent re-animations
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of section is visible
    });
    
    // Start observing the section
    if (section) {
        observer.observe(section);
    }
});