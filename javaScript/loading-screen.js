document.addEventListener('DOMContentLoaded', () => {
    const fadeElement = document.getElementById('fade');

    // Function to show the loading screen
    const showLoadingScreen = () => {
        fadeElement.classList.add('fade-active'); // Show loading screen
    };

    // Function to hide the loading screen
    const hideLoadingScreen = () => {
        setTimeout(() => {
            fadeElement.classList.remove('fade-active'); // Hide loading screen
        }, 500); // Match the transition duration
    };

    // Example: Simulate a loading action
    document.getElementById('trigger-action').addEventListener('click', () => {
        showLoadingScreen();

        // Simulate a task (e.g., fetching data)
        setTimeout(() => {
            // Task is complete
            hideLoadingScreen();
        }, 2000); // Simulate 2 seconds of loading
    });
});
