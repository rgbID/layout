const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.menu-wrapper');
const closeBurger = document.querySelector('.close-button-burger');
const menu = document.querySelectorAll('.menu-item');
console.log(menu);
burger.addEventListener("click", function(e) {
    burgerMenu.classList.add('active');
});
closeBurger.addEventListener("click", function(e) {
    burgerMenu.classList.remove('active');
});
// menu.addEventListener("click", function(e) {
//     this.classList.add('active');
// });
menu[0].onclick = function() {
    this.classList.add('active');
}