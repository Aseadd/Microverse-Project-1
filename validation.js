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
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
  {
    name: ' Electronic health system',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'images/5G.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    Live: 'https://github.com/Aseadd/Microverse-Project-1',
    Source: 'https://github.com/Aseadd/Microverse-Project-1',
  },
];

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'project-1') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[0].image),
        (document.getElementById('modal-title').innerHTML = projects[0].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[0].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[0].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[0].technologies[0]}</p></li>
                    <li><p>${projects[0].technologies[1]}</p></li>
                    <li><p>${projects[0].technologies[2]}</p></li>
                   `),
        (document.getElementById('modal-description').innerHTML = projects[0].description),
      );
    } else if (event.currentTarget.classList[0] === 'project-2') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[1].image),
        (document.getElementById('modal-title').innerHTML = projects[1].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[1].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[1].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[1].technologies[0]}</p></li>
                      <li><p>${projects[1].technologies[1]}</p></li>
                      <li><p>${projects[1].technologies[2]}</p></li>
                      `),
        (document.getElementById('modal-description').innerHTML = projects[1].description),
      );
    } else if (event.currentTarget.classList[0] === 'project-3') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[2].image),
        (document.getElementById('modal-title').innerHTML = projects[2].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[2].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[2].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[2].technologies[0]}</p></li>
                        <li><p>${projects[2].technologies[1]}</p></li>
                        <li><p>${projects[2].technologies[2]}</p></li>
                       `),
        (document.getElementById('modal-description').innerHTML = projects[2].description),
      );
    } else if (event.currentTarget.classList[0] === 'project-4') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[3].image),
        (document.getElementById('modal-title').innerHTML = projects[3].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[3].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[3].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[3].technologies[0]}</p></li>
                          <li><p>${projects[3].technologies[1]}</p></li>
                          <li><p>${projects[3].technologies[2]}</p></li>
                          `),
        (document.getElementById('modal-description').innerHTML = projects[3].description),
      );
    } else if (event.currentTarget.classList[0] === 'project-5') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[4].image),
        (document.getElementById('modal-title').innerHTML = projects[4].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[4].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[4].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[4].technologies[0]}</p></li>
                            <li><p>${projects[4].technologies[1]}</p></li>
                            <li><p>${projects[4].technologies[2]}</p></li>
                            `),
        (document.getElementById('modal-description').innerHTML = projects[4].description),
      );
    } else if (event.currentTarget.classList[0] === 'project-6') {
      console.log(
        (document.getElementById('project-image-desktop').src = projects[5].image),
        (document.getElementById('modal-title').innerHTML = projects[5].name),
        (document.getElementById(
          'modal-btns',
        ).innerHTML = `<button action="${projects[5].Live}" type="submit">See Live <img class='popup-btn-icon' src="images/Icon - Live.svg" alt="arrow icon"></button>
                      <button action="${projects[5].Source}" type="submit">See Source <img class='popup-btn-icon' src="images/Icon -GitHub.svg" alt="github icon">  </button>`),
        (document.getElementById(
          'modal-tag',
        ).innerHTML = `<li><p>${projects[5].technologies[0]}</p></li>
                              <li><p>${projects[5].technologies[1]}</p></li>
                              <li><p>${projects[5].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML = projects[5].description),
      );
    }
  });
});

const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const isValid = (email) => {
  const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
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
  }
  return true;
};
contactForm.addEventListener('submit', () => {
  validateEmail();
});
