let elements = document.getElementsByClassName("Button");

let myFunction = function (event) {
    document.getElementById("input").value += event.target.value;
};

Array.from(elements).forEach(function (element) {
    element.addEventListener('click', myFunction);
});