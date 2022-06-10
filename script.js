// const navigation = document.getElementById("navbar");
// const menu = document.getElementById("menu");
// console.log(navigation)
// menu.addEventListener("click", () => {
//   navigation.classList.add("active");
//   menu.classList.add("active");
// });




const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


navLink.addEventListener('click',() => {
  navLink.innerHTML.toggle('hide');
} )