const textElements = document.querySelectorAll('.text-line1');

function changeTextColor(index) {
  if (index < textElements.length) {
    textElements[index].style.color = 'red'; // Change text color to red
    setTimeout(() => {
      textElements[index].style.color = 'white'; // Change text color back to black after 1 second
      changeTextColor((index + 1) % textElements.length); // Move to the next text element or back to the first one
    }, 2200);
  }
}

// Start the animation
changeTextColor(0);    

   



const textElements1 = document.querySelectorAll('.text-line2');

function changeTextColor1(index) {
  if (index < textElements1.length) {
    textElements1[index].style.color = 'red'; // Change text color to red
    setTimeout(() => {
      textElements1[index].style.color = 'white'; // Change text color back to black after 1 second
      changeTextColor1((index + 1) % textElements1.length); // Move to the next text element or back to the first one
    }, 2200);
  }
}

// Start the animation
changeTextColor1(0);   

 




