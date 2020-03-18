var childNumberUp = document.querySelector(".child-up");
var childNumberDown = document.querySelector(".child-down");

var childNumber = document.querySelector("[name = children]");

childNumberUp.addEventListener('click', function (evt){
    evt.preventDefault();
    childNumber.value++;
});

childNumberDown.addEventListener('click', function (evt){
    evt.preventDefault();
    if(childNumber.value != 0){
        childNumber.value--;
    }
});