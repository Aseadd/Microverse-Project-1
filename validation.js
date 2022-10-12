const hamb = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-item');
const headline = document.querySelector('.headline');
const welcome = document.querySelector('.logo-text');
const recentWorks = document.querySelector('.recent-works');
const about = document.querySelector('.about-me');
const contact = document.querySelector('.card2');
const footer = document.querySelector('.bottom-social-media');
const toolbar = document.querySelector('.toolbar');

function myFunction() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
  welcome.classList.toggle('active');
  headline.classList.toggle('active');
  recentWorks.classList.toggle('active');
  about.classList.toggle('active');
  contact.classList.toggle('active');
  footer.classList.toggle('active');
  toolbar.classList.toggle('active');
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
}

navItem.forEach((n) => n.addEventListener('click', closeMenu));

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

const projects = [
  {
    name: 'Space Travellers Hub',
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. The data is fetched from a SpaceX API in real time.',
    image: 'images/5G.png',
    technologies: [
      'React',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Redux',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/space-travelers-hub',
    Source: 'https://github.com/Aseadd/space-travelers-hub',
  },
  {
    name: 'Cryptocurrency Metrics Webapp',
    description:
      ' A web application for individuals to check the current status of crypto market values. The data is fetched from a Coinstate API in real time.',
    image: 'images/5G.png',
    technologies: [
      'React',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Redux',
      'Codepen',
    ],
    Live: 'https://development--rad-licorice-2d6496.netlify.app/',
    Source: 'https://github.com/Aseadd/metrics-webapp-crypto',
  },
  {
    name: 'Book Store Web Application',
    description:
      'This Web Application is single page application developed with React that add, remove, store books into an API.',
    image: 'images/5G.png',
    technologies: [
      'React',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Redux',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/bookstore-app',
    Source: 'https://github.com/Aseadd/bookstore-app',
  },
  {
    name: 'Math Magician',
    description:
      'This Web Application is single page application developed with React that makes simple calculations and read random math related quotes',
    image: 'images/5G.png',
    technologies: [
      'React',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/math-magicians',
    Source: 'https://github.com/Aseadd/math-magicians',
  },
  {
    name: 'Meal Web App',
    description:
      'This Web Application is based on an external API that fetches the list of meals and stores comments and likes rated by users of the web application.',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://aseadd.github.io/Capstone2/dist/',
    Source: 'https://github.com/Aseadd/capstone2',
  },
  {
    name: ' web Development Bootcamp Website',
    description:
      'This website is a web development bootcamp webpage. Its goal is to enable people around the world to have access to aspire remote jobs and to make them learn web development online regardless of the location .',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Bootcamp-Project',
    Source: 'https://github.com/Aseadd/Bootcamp-Project',
  },
];

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'project-1') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[0].image),
        (document.getElementById('modal-title').innerHTML = projects[0].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[0].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[0].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[0].technologies[0]}</p></li>
                    <li><p>${projects[0].technologies[1]}</p></li>
                    <li><p>${projects[0].technologies[2]}</p></li>
                   `),
        (document.getElementById('modal-description').innerHTML =
          projects[0].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-2') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[1].image),
        (document.getElementById('modal-title').innerHTML = projects[1].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[1].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[1].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[1].technologies[0]}</p></li>
                      <li><p>${projects[1].technologies[1]}</p></li>
                      <li><p>${projects[1].technologies[2]}</p></li>
                      `),
        (document.getElementById('modal-description').innerHTML =
          projects[1].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-3') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[2].image),
        (document.getElementById('modal-title').innerHTML = projects[2].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[2].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[2].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[2].technologies[0]}</p></li>
                        <li><p>${projects[2].technologies[1]}</p></li>
                        <li><p>${projects[2].technologies[2]}</p></li>
                       `),
        (document.getElementById('modal-description').innerHTML =
          projects[2].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-4') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[3].image),
        (document.getElementById('modal-title').innerHTML = projects[3].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[3].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[3].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[3].technologies[0]}</p></li>
                          <li><p>${projects[3].technologies[1]}</p></li>
                          <li><p>${projects[3].technologies[2]}</p></li>
                          `),
        (document.getElementById('modal-description').innerHTML =
          projects[3].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-5') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[4].image),
        (document.getElementById('modal-title').innerHTML = projects[4].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[4].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[4].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[4].technologies[0]}</p></li>
                            <li><p>${projects[4].technologies[1]}</p></li>
                            <li><p>${projects[4].technologies[2]}</p></li>
                            `),
        (document.getElementById('modal-description').innerHTML =
          projects[4].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-6') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[5].image),
        (document.getElementById('modal-title').innerHTML = projects[5].name),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[5].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[5].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[5].technologies[0]}</p></li>
                              <li><p>${projects[5].technologies[1]}</p></li>
                              <li><p>${projects[5].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[5].description)
      );
    }
  });
});

const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const isValid = (email) => {
  const check =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return check.test(String(email));
};
const setError = (element, message) => {
  const emailChecker = element.parentElement;
  const errorDisplay = emailChecker.querySelector('.error');

  errorDisplay.innerText = message;
  emailChecker.classList.add('error');
  emailChecker.classList.remove('success');
};
const validateEmail = () => {
  const emailValue = email.value.trim();
  if (!isValid(emailValue)) {
    setError(email, 'Invalid email address');
    return false;
  } else if (emailValue != emailValue.toLowerCase()) {
    setError(email, 'Do not use capital letters for email');
    return false;
  }
  return true;
};
contactForm.addEventListener('submit', () => {
  validateEmail();
});
