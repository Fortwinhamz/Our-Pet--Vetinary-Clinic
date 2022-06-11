const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const menuBar = document.querySelector('.toggle-menu');

// function to show the whole nav when the nav bar is clicked
const showNavMenu = () => {
  nav.classList.toggle('showNav');
  let closeBar = menuBar.querySelector('i');
  closeBar.classList.toggle('showMenu');
};

// this fucntion is showing the active section when it is clicked on
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');

    showNavMenu();
  });
});

// event listener to call the nav bar
menuBar.addEventListener('click', showNavMenu);
