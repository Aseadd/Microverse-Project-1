const hamb = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-item');
const headline = document.querySelector('.headline');
function myFunction() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
  headline.style.top = '92px';
}
hamb.addEventListener('click', myFunction);
const navItem = document.querySelectorAll('.nav-link');
function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
}
navItem.forEach((n) => n.addEventListener('click', closeMenu));
