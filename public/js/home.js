const hamburgerMenu = document.querySelector('.burgerMenu');
const navMenu = document.querySelector('.nav-bar');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active')
})