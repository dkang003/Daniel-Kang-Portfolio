console.log("Hi")

// =============================================================
// CAROUSEL CODE
// =============================================================
// Auto Slideshow function
// array of project slides
var projects = $('.project');
// array of slider dots
var dots = $('.dot');
var slideIdx = 0;

function showSlides() {
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = 'dot';
    }
    slideIdx++;

    if (slideIdx > projects.length) { slideIdx = 1 };

    projects[slideIdx - 1].style.display = "flex";
    dots[slideIdx-1].className += ' active';
    setTimeout(showSlides, 5000);
}

showSlides();

// Manual slideshow
function nextSlide(n) {
    var nextIdx = slideIdx + n;
    if (n < 0) {
        thisSlide(projects.length + nextIdx);
    } else {
        thisSlide(nextIdx);
    }
}

function thisSlide(num) {
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = 'dot';
    }
    
    slideIdx = num % 2;
    projects[slideIdx].style.display = "flex";
    dots[slideIdx].className += ' active';
}

// Slideshow dot clicking
$("#one").on('click', function() {
    thisSlide(0);
});

$("#two").on('click', function() {
    thisSlide(1);
});


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });