document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("startScreen");

    const navBar = document.querySelector(".home_nav");
    navBar.style.display = "none"; // Hide navbar
    
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
          // Hide all other info boxes
    Object.values(specialInfoBoxes).forEach(box => {
        box.classList.remove("active");
        box.style.display = "none"; // Ensure other boxes are hidden
    });

    // Show the specific info box
    const targetBox = specialInfoBoxes[segmentId];
    if (targetBox && window.innerWidth >= 1080) {
        targetBox.classList.add("active");
        targetBox.style.display = "block"; // Make it visible
    } else {
        console.warn(`Info box for ${segmentId} not found or screen width too small.`);
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
   
    
    // Default: Select Segment 3 (About Me) on page load
    // selectSegment("segment3");


});



const segmentsData = {
    segment1: { text: '<img src="../assets/sjao_faces/sjao-anime-3.gif" alt="Centered Image" class="centered-image" style="max-width:90%; max-height: 90%;  z-index:-10 !important">', listId: 'list1' },
    segment2: { text: '<img src="../assets/sjao_faces/sjao-anime-4.gif" alt="Centered Image" class="centered-image" style="max-width:90%; max-height: 90%; filter: drop-shadow(0 0 4px white) drop-shadow(0 0 8px white) drop-shadow(0 0 12px white) ; z-index:-10 !important">', listId: 'list2' },
    segment3: { text: '<img src="../assets/sjao_faces/sjao-smile-anime.gif" alt="Centered Image" class="centered-image" style="max-width:90%; max-height: 90%; filter: drop-shadow(0 0 4px white) drop-shadow(0 0 8px white) drop-shadow(0 0 12px white); z-index:-10 !important">', imgClass:'<img src="../assets/sjao_faces/sjao-smile.png" alt="Centered Image" class="centered-image" style="max-width:50%; max-height: 50%;">', listId: 'list3' },
    segment4: { text: '<img src="../assets/sjao_faces/sjao-anime-1.gif" alt="Centered Image" class="centered-image" style="max-width:90%; max-height: 90%; filter: drop-shadow(0 0 4px white) drop-shadow(0 0 8px white) drop-shadow(0 0 12px white); z-index:-10 !important">', listId: 'list4' }
};

// Store selected segment data (text and icon)
let selectedSegmentData = { text: 'Hover', iconClass: null };

// Function to start the game with fade-out and fade-in transitions
function startGame() {
    const startScreen = document.getElementById("startScreen");
    const selectorScreen = document.getElementById("selectorScreen");
    const segments = document.querySelectorAll(".segment");
    const mobileButtonContainer = document.querySelector(".mobile-button-container");
    const infoBoxContainer = document.querySelector(".info-box");

    const introInfoBox = document.getElementById("specialInfoBox3");

    const navBar = document.querySelector(".home_nav");


    // Set initial offset positions for segments
    segments[0].style.transform = "translate(-70px,-70px)";
    segments[1].style.transform = "translate(70px, -70px)";
    segments[2].style.transform = "translate(70px, 70px)";
    segments[3].style.transform = "translate(-70px, 70px)";

  

    
    // Fade out the start screen and show the selector screen
    startScreen.style.opacity = "0";
    setTimeout(() => {

        navBar.style.display = "block"; // show navbar
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

                //   gameStarted = true;
             
            });
            selectSegment("segment3");
           

            showSpecialInfoBox("segment3");
      
        }, 100); // Delay to trigger the transform and opacity transition
       
    introInfoBox.style.display="block";
      
    }, 1000); // Delay to match the CSS transition duration

  
}

// Function to update center text with optional Font Awesome icon
function updateCenterText(newText, iconClass, imgClass) {
    const centerTextOverlay = document.getElementById('centerTextOverlay');
    centerTextOverlay.style.opacity = 0;

    setTimeout(() => {
        if (iconClass) {
            centerTextOverlay.innerHTML = `<i class="fa ${iconClass}"></i>`;
        } else {
            centerTextOverlay.innerHTML = `<p>${newText}</p>`;
        }
        centerTextOverlay.style.opacity = 1;
    }, 500);

    // setTimeout(() => {
    //     if (imgClass) {
    //         centerTextOverlay.innerHTML = `${imgClass}`;
    //     } else {
    //         centerTextOverlay.innerHTML = `<p>${newText}</p>`;
    //     }
    //     centerTextOverlay.style.opacity = 1;
    // }, 500);
}

// Function to reset the center text to the default or selected segment text and icon
function resetCenterText() {
    const { text, iconClass } = selectedSegmentData;
    updateCenterText(text, iconClass);
}

// Existing selectSegment function
function selectSegment(segmentId) {
    const { text, iconClass, listId } = segmentsData[segmentId];
    const specialInfoBox = document.getElementById("specialInfoBox");
    document.querySelectorAll('.segment').forEach(segment => segment.classList.remove('selected'));
    document.getElementById(segmentId).classList.add('selected');
    
    // Update selected segment data with both text and icon
    selectedSegmentData = { text, iconClass };
    
    // Update center text with the selected segment's text and icon
    updateCenterText(text, iconClass);

    // Hide all lists, then show the selected one
    document.querySelectorAll('.elements-list').forEach(list => {
        list.classList.remove('active');
        list.style.opacity = 0;
    });

    const selectedList = document.getElementById(listId);
    if (selectedList) {
        selectedList.classList.add('active');
        selectedList.style.opacity = 1;

        const listItems = selectedList.querySelectorAll('.list-item');
        listItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }

    const selectorScreen = document.getElementById('selectorScreen');
    if (selectedList && selectedList.classList.contains('active')) {
        selectorScreen.classList.add('move-side');
    } else {
        selectorScreen.classList.remove('move-side');
    }

    if (segmentId === "segment3" && window.innerWidth >= 1080) {
        specialInfoBox.classList.add("active");
    } else {
        specialInfoBox.classList.remove("active");
    }
}

// Add event listeners to each segment for hover and click actions
Object.keys(segmentsData).forEach(segmentId => {
    const segment = document.getElementById(segmentId);
    const { text, iconClass } = segmentsData[segmentId];

    segment.addEventListener('mouseover', () => updateCenterText(text, iconClass));
    segment.addEventListener('mouseout', resetCenterText);
    segment.addEventListener('click', () => selectSegment(segmentId));
});


// Function to show the mobile list based on button click
// function showMobileList(listId) {
//     // Hide all mobile lists
//     document.querySelectorAll('.mobile-elements-list').forEach(list => {
//         list.style.display = 'none';
//     });

//     // Show the selected mobile list
//     const selectedList = document.getElementById(listId);
//     if (selectedList) {
//         selectedList.style.display = 'block';
//     }
// }


document.addEventListener("DOMContentLoaded", () => {
    const segments = document.querySelectorAll(".segment");
    const selectorScreen = document.getElementById("selectorScreen");
    const hoverText = document.createElement("div");
  
    // Style hover text dynamically
    hoverText.id = "hoverText";
    hoverText.style.position = "absolute";
    hoverText.style.top = "10%";
    hoverText.style.left = "50%";
    hoverText.style.transform = "translateX(-50%)";
    hoverText.style.fontSize = "1.5em";
    hoverText.style.textAlign = "center";
    hoverText.style.opacity = 0;
    hoverText.style.transition = "opacity 0.3s ease";
    selectorScreen.appendChild(hoverText);
  
    // Add hover effect for segments
    segments.forEach(segment => {
      segment.addEventListener("mouseover", () => {
        const title = segment.querySelector("title").textContent;
        hoverText.textContent = title;
        hoverText.style.opacity = 1;
      });
  
      segment.addEventListener("mouseout", () => {
        hoverText.style.opacity = 0;
      });
    });
  });
  
// Get references to elements
const toggleButton = document.getElementById('toggleButton');
const switchTooltip = document.getElementById('switchTooltip');
const segmentListContainer = document.getElementById('segmentListContainer');
const mobileListContainer = document.getElementById('mobileListContainer');
const boBody = document.querySelector('body');
toggleButton.textContent = 'Switch to Simple View';
switchTooltip.textContent = 'Remove fancy gimmicks and keep it minimal! Recomended for FireFox browsers and mobile displays';


// Function to update display based on screen width
function handleResize() {

    if (window.innerWidth > 1080) {
        // Default to showing segmentListContainer when screen is wider than 1080px
        segmentListContainer.style.display = 'block';
        mobileListContainer.style.display = 'none';
    } else {
        // Show mobileListContainer for screens 1080px or smaller
        segmentListContainer.style.display = 'none';
        mobileListContainer.style.display = 'block';
    }
}


// Function to toggle between the containers
function toggleView() {
   
    if (segmentListContainer.style.display === 'none') {
        segmentListContainer.style.display = 'block';
        mobileListContainer.style.display = 'none';
        boBody.style.height = '100vh';
        // boBody.style.overflow = 'hidden'; 
        toggleButton.textContent = 'Switch to Simple View';
        switchTooltip.textContent = 'Remove fancy gimmicks and keep it minimal! Recomended for FireFox browsers and mobile displays';
    } else {
        segmentListContainer.style.display = 'none';
        mobileListContainer.style.display = 'block';
        boBody.style.height = '100%';

        // boBody.style.overflow = 'scroll'; 
       
        toggleButton.textContent = 'Switch to Fancy View';
        switchTooltip.textContent = 'Allow fancy visuals for your amusement :)';
    }
}

// Add event listener for the toggle button
toggleButton.addEventListener('click', function () {
    if (window.innerWidth >= 1080) {
        toggleView();
    }
});

// Add event listener for window resize to enforce media query behavior
window.addEventListener('resize', handleResize);

// Initial setup to handle the current screen size
handleResize();



document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list-item");
    const infoBox = document.getElementById("infoBox");
    const infoBoxText = document.getElementById("infoBoxText");

    const infoBoxContent = {
        "Travel App Figma Prototype": `
            <div style="font-size:6em; text-align:center"><i class="fa-solid fa-plane fa-bounce"></i></div>
            <p>A prototype design for a travel app using Figma. This project focuses on user-friendly navigation and modern UI elements.</p>
                 <div class="tag">Figma</div>
    <div class="tag">Adobe Illustrator</div>
            `,
        "Bakery Website Redesign": `
            <div style="font-size:6em; text-align:center"><i class="fa-solid fa-cake-candles fa-bounce"></i></div>
            <p>Redesigned a bakery website for improved user experience, focusing on aesthetics and accessibility.</p>
          <div class="tag">CSS3</div>
    <div class="tag">HTML</div>
    <div class="tag">CSS3</div>
     <div class="tag">SASS/SCSS</div>
<div class="tag">JavaScript</div>
<div class="tag">Figma</div>
            `,
        "Smart Drive Website": `
          
    <div style="font-size:6em; text-align:center"><i class="fa-solid fa-car-side fa-bounce"></i></div>
            <p>A smart website for driving education and resources. It provides tools for students preparing for driving tests.</p>
       <div class="tag"> Joomla!</div> 
           <div class="tag"> Joomla!</div>
    <div class="tag"> CSS3</div>
    <div class="tag"> HTML</div>
    <div class="tag"> Hikashop</div>`,

        "Sleep Wellness Chatbot": `
           
            <div style="font-size:6em; text-align:center"><i class="fa-solid fa-bed fa-fade"></i></div>
            <p>An AI chatbot that promotes better sleep habits through personalized recommendations and engaging conversations.</p>
        <div class="tag">Llama-2-13B-Chat</div>
<div class="tag">LangChain</div>
<div class="tag">ChromaDB</div>
<div class="tag">Gradio</div>
<div class="tag">Python</div>
            `,
        "Facemask Detection App": `
           <div style="font-size:6em; text-align:center"><i class="fa-solid fa-mask-face fa-bounce"></i></div>
            <p>An AI app for detecting facemask compliance in real-time using advanced image recognition technologies.</p>
       <div class="tag">Java</div>
<div class="tag">Android Studios</div>
<div class="tag">TensorFlow</div>
<div class="tag">YOLOv2</div>
            `,
        "Wildlife and Pest Animal Detection": `
            <div style="font-size:6em; text-align:center"><i class="fa-solid fa-crow fa-bounce"></i></div>
            <p>AI-powered app to identify wildlife and pest animals, aiding conservation and pest control efforts.</p>
        <div class="tag">YOLOv8</div>
<div class="tag">TensorFlow</div>
<div class="tag">Python</div>
<div class="tag">Matplotlib Pyplot</div>
<div class="tag">Pandas</div>
<div class="tag">Numpy</div>

            `,
        "Github": `
            <h3>Github</h3>
            <a href="https://github.com/SorrenJao" target="_blank">
                <div style="font-size:6em; text-align:center"><i class="fa-brands fa-github"></i></div>
            </a>
            <p>Visit Sorren's GitHub profile to view all repositories and projects.</p>
        `,
        "Virtual Pet App": ` 
          <div style="font-size:6em; text-align:center"><i class="fa-solid fa-cat fa-bounce"></i></div>
            <p>A fun virtual pet app built with modern web technologies. Manage pet stats, mood, and activities!</p>
        <div class="tag">React</div>
<div class="tag">JavaScript</div>
<div class="tag">Express</div>
<div class="tag">EJS</div>
<div class="tag">SQL</div>
<div class="tag">vaderSentiment</div>
<div class="tag">Sentiment</div>
<div class="tag">Git</div>
<div class="tag">Node.js</div>
<div class="tag">AWS RDS</div>
            `,
        "Map Listing Web Application": `
        <div style="font-size:6em; text-align:center"><i class="fa-regular fa-compass fa-bounce"></i></div>
            <p>A map-based app for listing and finding locations with advanced search capabilities.</p>
        <div class="tag">Node.js</div>
<div class="tag">jQuery</div>
<div class="tag">Leaflet</div>
<div class="tag">SQL</div>
<div class="tag">PostgreSQL</div>
<div class="tag">SASS</div>
<div class="tag">Express</div>
<div class="tag">EJS</div>
<div class="tag">Git</div>
            `,


            "Sorren AI Chatbot": `
            <div style="font-size:6em; text-align:center"><i class="fa-solid fa-comments fa-bounce"></i></div>
                <p>A chatbot with the likeness and memories of your's truly!</p>
            <div class="tag">Node.js</div>
    <div class="tag">OpenAI</div>
            <div class="tag">TypeScript</div>
    <div class="tag">React</div>
    <div class="tag">JavaScript</div>
    <div class="tag">Express.js</div>
    <div class="tag">MongoDB</div>
                `,
        "Webpage Creator": `
            
          <div style="font-size:6em; text-align:center"><i class="fa-solid fa-user-graduate fa-bounce"></i></div>
            <p>A web page generator for SFU students, allowing quick and easy personal webpage creation.</p>
       <div class="tag">HTML</div>
<div class="tag">CSS</div>
<div class="tag">JavaScript</div>
<div class="tag">jQuery</div>
            `,
    };
    

    listItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            const text = item.textContent.trim();
            if (infoBoxContent[text]) {
                infoBoxText.innerHTML = infoBoxContent[text]; // Use innerHTML to render HTML content
                infoBox.style.opacity = 1;
                infoBox.style.visibility = "visible";
            }
        });

        item.addEventListener("mouseout", () => {
            infoBox.style.opacity = 0;
            infoBox.style.visibility = "hidden";
        });
    });
});

