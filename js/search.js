const search = document.querySelector('.search');
const popup = document.querySelector('.search-popup');
const close = document.querySelector('.close-button-search');
search.addEventListener("click", function(e) {
    popup.classList.add('active');
});
close.addEventListener("click", function(e) {
    popup.classList.remove('active');
});