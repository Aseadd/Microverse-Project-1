const hamb = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-item');
const headline = document.querySelector('.headline');
function myFunction() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
  headline.style.top = '200px';
}
hamb.addEventListener('click', myFunction);
const navItem = document.querySelectorAll('.nav-link');

navItem.forEach((n) => n.addEventListener('click', closeMenu));
