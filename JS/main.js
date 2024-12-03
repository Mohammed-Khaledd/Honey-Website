const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky" , window.scrollY > 80);

});

// Function to toggle the visibility of the button
function toggleScrollButton() {
    const scrollButton = document.querySelector('.scroll');
    if (window.scrollY >= 100) {
      scrollButton.style.display = 'block'; // Show the button
    } else {
      scrollButton.style.display = 'none'; // Hide the button
    }
  }
  
  // Add a scroll event listener
  window.addEventListener('scroll', toggleScrollButton);
  
  // Initial setup to hide the button
  document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.scroll');
    if (scrollButton) {
      scrollButton.style.display = 'none'; // Ensure the button is hidden initially
    }
  });
  

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

window.onscroll = ()=>{
    nav.classList.remove('open');
    menu.classList.remove('bx-x');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {delay: 300});
sr.reveal('.home-img', {delay: 400});
sr.reveal('.container', {delay: 400});

sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay: 300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn , .shop-content', {delay: 300});

sr.reveal('.review-content , .contact', {delay: 300});
