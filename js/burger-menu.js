const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.menu-wrapper');
const closeBurger = document.querySelector('.close-button-burger');
const menu = document.getElementsByClassName('.menu-item');
burger.addEventListener("click", function(e) {
    burgerMenu.classList.add('active');
});
closeBurger.addEventListener("click", function(e) {
    burgerMenu.classList.remove('active');
});
