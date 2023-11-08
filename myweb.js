

/* Menu Overlay : Slide Screen Animation */ 
const menuIcon = document.getElementById('menuIcon');
const menuText = document.getElementById('menuText');
const menuOverlay = document.getElementById('menuOverlay');

let menuOpen = false;

menuIcon.addEventListener('click', () => {
    if (!menuOpen) {
        menuIcon.classList.add('active');
        menuText.textContent = ' ';
        menuOverlay.style.left = '0';
        menuOverlay.style.borderRadius = '5px';
       
        menuOpen = true;
    } else {
        menuIcon.classList.remove('active');
        menuText.textContent = ' ';
        menuOverlay.style.left = '-100%';
        menuOverlay.style.borderRadius = '5px';
        
        menuOpen = false;
    }
});




function closeOverlay() {
    const menuIcon = document.getElementById('menuIcon');
    const menuText = document.getElementById('menuText');
    const menuOverlay = document.getElementById('menuOverlay');
    menuIcon.classList.remove('active');
    menuText.textContent = ' ';
    menuOverlay.style.left = '-100%';
    menuOpen = false;
}

// Prevent clicks on the close button from propagating to the overlay
document.querySelector('.close-overlay').addEventListener('click', function (e) {
    e.stopPropagation();
});


// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Event listener for the search button
searchButton.addEventListener('click', () => {
    // Get the search query from the input field
    const query = searchInput.value;
    
    // You can implement your search logic here
    // For demonstration purposes, let's just display the query as a result
    searchResults.innerHTML = `<p>Search results for: ${query}</p>`;
});

/* Animation for the Overlay Lists */




document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menuOverlay = document.getElementById("menuOverlay");
   const list = document.querySelector(".vertical-list");
     const listItems = list.querySelectorAll("li");
    const leftContent = document.querySelector(".left-content");

    let menuOpen = false;

    menuIcon.addEventListener("click", () => {
        if (!menuOpen) {
            menuIcon.classList.add("active");
            menuOverlay.classList.add("overlay-active"); // Add class to show overlay
            menuOpen = true;

            // Reset the list animation
            list.classList.remove("active");
            void list.offsetWidth; // Trigger reflow to reset animation
            list.classList.add("active");

            // Add animation class to left content for every entry
            leftContent.classList.add("enter-animation");

            // Add animation to each list item
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = "1";
                }, index * 100); // Adjus////////////////////t the delay as needed
            });
      } else {
            // Remove the "active" class to trigger exit animation on the list
            list.classList.remove("active");
            void list.offsetWidth; // Trigger reflow to reset animation
            list.classList.add("active");

            // Wait for the exit animation to complete before closing the overlay
            setTimeout(() => {
                menuIcon.classList.remove("active");
                menuOverlay.classList.remove("overlay-active"); // Remove class to hide overlay
                menuOpen = false;
            }, listItems.length * 100); // Adjust the delay based on the number of items
        }
    });
});







