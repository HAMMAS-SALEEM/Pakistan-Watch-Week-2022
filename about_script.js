const burgerBtn = document.querySelector('.ham0');
const navMenu = document.querySelector('.nav_desktop');
const crossBtn = document.querySelector('.crossBtn');

burgerBtn.addEventListener('click', () => {
  navMenu.style.visibility = 'visible';
});

function hideMenu() {
  if (window.innerWidth < 769) {
    navMenu.style.visibility = 'hidden';
  }
}

crossBtn.addEventListener('click', hideMenu);
