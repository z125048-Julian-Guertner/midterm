// Reference to the navigation and hero section
// to later apply styles based on scroll position
const nav = document.querySelector("nav"); // first element with the name "nav" 
const hero = document.getElementById("hero");

// Event listener for vertical scroll location -> saved in scrollPosition
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || document.documentElement.scrollPosition;

// offsetHeight is used to get all height information including padding and borders
  const heroHeight = hero.offsetHeight; //

  // Check if the scroll position is greater than the hero section height
  if (scrollPosition > heroHeight - 60) {
    nav.classList.add("nav-background");
  } else {
    nav.classList.remove("nav-background");
  }

  // Check if user scrolled up or down
  //save current position in currentScroll
  let currentScroll = scrollPosition;

  // check if lastScroll is defined and if currentScroll is greater than lastScroll
  if (window.lastScroll && (currentScroll > window.lastScroll)) {
    nav.style.top = "-210px";
  } else {
    nav.style.top = "0";
  }
  // Save the current scroll position for the next scroll event
  window.lastScroll = currentScroll;
});






// Fade-in effect for elements when they come into view on scroll
// starting with the DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // referencing all elements with the class 'fade-in-on-scroll' in HTML
  const elements = document.querySelectorAll('.fade-in-on-scroll');


  function handleScroll() {
    //at 90% of the viewport height, the fade-in effect is triggered
    const triggerPosition = window.innerHeight * 0.9;

    elements.forEach(el => {
      //saving the "Distance to the top end of the viewport" in elementDistanceTop
      const elementDistanceTop = el.getBoundingClientRect().top;

      // if the element is inside 90% of the viewport height, trigger the fade-in effect
      if (elementDistanceTop < triggerPosition) {
        // visibility is set to visible
        el.classList.add('visible');
      }
    });
  }

  // Every time the user scrolls, the handleScroll function is called
  window.addEventListener('scroll', handleScroll);

  // call handleScroll once to apply the effect immediately on page load
  handleScroll();
});
