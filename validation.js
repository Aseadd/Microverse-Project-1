const hamb = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-item');
const headline = document.querySelector('.headline');
const welcome = document.querySelector('.logo-text');
const navBar = document.querySelector('.nav-menu');
const section = document.querySelectorAll('.about-me');
const recentWorks = document.querySelector('.recent-works');
const about = document.querySelector('.about-me');
const contact = document.querySelector('.card2');
const footer = document.querySelector('.bottom-social-media');
const toolbar = document.querySelector('.toolbar');
function myFunction() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
  // headline.style.top = '200px';
  welcome.classList.toggle('active');
  headline.classList.toggle('active');
  recentWorks.classList.toggle('active');
  about.classList.toggle('active');
  contact.classList.toggle('active');
  footer.classList.toggle('active');
  toolbar.classList.toggle('active');
  // welcome.style.color = 'white';
}
hamb.addEventListener('click', myFunction);
const navItem = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
  welcome.classList.remove('active');
  headline.classList.remove('active');
  recentWorks.classList.remove('active');
  about.classList.remove('active');
  contact.classList.remove('active');
  footer.classList.remove('active');
  toolbar.classList.remove('active');
  headline.style.top = '92px';
  // welcome.style.color = 'black';
}

navItem.forEach((n) => n.addEventListener('click', closeMenu));
