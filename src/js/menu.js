const mobileMenuButton = document.querySelector('.header-mobile-menu');
const navigationMenu = document.querySelector('.navigation-menu');
const closeMenuButton = document.querySelector('.navigation-btn');
mobileMenuButton.addEventListener('click', () => {
  navigationMenu.classList.add('is-open');
});
closeMenuButton.addEventListener('click', () => {
  navigationMenu.classList.remove('is-open');
});
