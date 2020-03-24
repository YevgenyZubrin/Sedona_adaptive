var body = document.querySelector(".body__container");

var menuButton = document.querySelector(".nav__button");

menuButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    body.classList.toggle("menu_show");
})