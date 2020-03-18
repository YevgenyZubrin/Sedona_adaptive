var motelSearchOpen = document.querySelector(".motel-search__button");
var motelSearch = document.querySelector(".modal-search");
var firstField = motelSearch.querySelector("[name = arrival_date]");

motelSearchOpen.addEventListener('click', function(evt){
    evt.preventDefault();
    motelSearch.classList.toggle("modal-show");
    firstField.focus();
});

window.addEventListener('keyup', function (evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();

        if(motelSearch.classList.contains("modal-show")) {
                    motelSearch.classList.remove("modal-show");
                }
    }
})