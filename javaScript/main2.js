document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("startScreen");


    const segments = document.querySelectorAll('.box.segment');
    const infoBoxes = document.querySelectorAll('.special-info-box');
    
    // Check if the URL contains the #project anchor
    if (window.location.hash === "#project") {
        // Hide the start screen and trigger the animation
        startScreen.style.display = "none"; // Hide the start screen immediately
        startGame(); // Trigger the segment animation
    }


        const specialInfoBoxes = {
            segment1: document.getElementById("specialInfoBox1"),
            segment2: document.getElementById("specialInfoBox2"),
            segment3: document.getElementById("specialInfoBox3"),
            segment4: document.getElementById("specialInfoBox4"),
        };
    
        const listItems = document.querySelectorAll(".list-item");
    
        // Function to show the special info box for the selected segment
        function showSpecialInfoBox(segmentId) {
            Object.values(specialInfoBoxes).forEach(box => box.classList.remove("active")); // Hide all boxes
            if (specialInfoBoxes[segmentId] && window.innerWidth >= 1080) {
                specialInfoBoxes[segmentId].classList.add("active"); // Show the active box
            }
        }
    
        // Function to hide the special info box
        function hideSpecialInfoBoxes() {
            Object.values(specialInfoBoxes).forEach(box => box.classList.remove("active")); // Hide all boxes
        }
    
        // Add click event for segment selection
        document.querySelectorAll(".segment").forEach(segment => {
            segment.addEventListener("click", () => {
                const segmentId = segment.id;
                showSpecialInfoBox(segmentId); // Show the relevant info box
            });
        });
    
        // Hide the special info box when hovering over a list-item
        listItems.forEach(item => {
            item.addEventListener("mouseover", hideSpecialInfoBoxes); // Hide all info boxes
    
            // Restore the special info box when unhovering
            item.addEventListener("mouseout", () => {
                const selectedSegment = document.querySelector(".segment.selected");
                if (selectedSegment) {
                    showSpecialInfoBox(selectedSegment.id); // Re-show the box for the selected segment
                }
            });
        });
   
    



});




// Function to start the game with fade-out and fade-in transitions
function startGame() {
    const startScreen = document.getElementById("startScreen");
    const selectorScreen = document.getElementById("selectorScreen");
    const segments = document.querySelectorAll(".segment");
    const mobileButtonContainer = document.querySelector(".mobile-button-container");
    const infoBoxContainer = document.querySelector(".info-box");
    // Set initial offset positions for segments
    segments[0].style.transform = "translate(-70px,-70px)";
    segments[1].style.transform = "translate(70px, -70px)";
    segments[2].style.transform = "translate(70px, 70px)";
    segments[3].style.transform = "translate(-70px, 70px)";

  
    // Fade out the start screen and show the selector screen
    startScreen.style.opacity = "0";
    setTimeout(() => {
        startScreen.style.display = "none"; // Hide start screen
        selectorScreen.style.display = "block"; // Show selector screen
        selectorScreen.style.display = "block"; // Show selector screen
        selectorScreen.style.opacity = "1"; // Fade in selector screen
        mobileButtonContainer.style.display="flex";
        infoBoxContainer.style.display= "block";
        // Trigger animation for each segment
        setTimeout(() => {
            segments.forEach(segment => {
                segment.style.transform = "translate(0, 0)";
                segment.style.opacity = 1;
                  mobileButtonContainer.style.display="flex";
            });
        }, 100); // Delay to trigger the transform and opacity transition
    }, 1000); // Delay to match the CSS transition duration
}

// Function to hide all info boxes
function hideAllInfoBoxes() {
    infoBoxes.forEach((box) => {
      box.style.display = 'none';
    });
  }
  
  const listItems = selectedList.querySelectorAll('.list-item-xl');
  listItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
          item.style.opacity = 1;
          item.style.transform = 'translateY(0)';
      }, index * 300);
  });


  // Add click event listeners to each segment
  segments.forEach((segment, index) => {
    segment.addEventListener('click', () => {
      const correspondingBox = document.getElementById(`specialInfoBox${index + 1}`);
  
      // Toggle display of the corresponding info box
      if (correspondingBox.style.display === 'block') {
        correspondingBox.style.display = 'none';
      } else {
        hideAllInfoBoxes(); // Hide all other info boxes
        correspondingBox.style.display = 'block';
      }
    });
  });
  