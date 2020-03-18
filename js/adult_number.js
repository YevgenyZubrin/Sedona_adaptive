var adultNumberUp = document.querySelector(".adult-up");
var adultNumberDown = document.querySelector(".adult-down");

var adultNumber = document.querySelector("[name = adults]");

adultNumberUp.addEventListener('click', function (evt){
    evt.preventDefault();
    adultNumber.value++;
});

adultNumberDown.addEventListener('click', function (evt){
    evt.preventDefault();
    if(adultNumber.value != 0){
        adultNumber.value--;
    }
});