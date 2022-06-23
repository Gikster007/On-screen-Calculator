
// function test() {
//     document.getElementById("input").value += document.getElementsByClassName("Button").value;
// }

// document.getElementsByClassName("Button").addEventListener("click", test);



let elements = document.getElementsByClassName("Button");

let myFunction = function () {
    var attribute = this.getAttribute("data-myattribute");
    document.getElementById("input").value += document.getElementsByClassName("Button").value;
};

Array.from(elements).forEach(function (element) {
    element.addEventListener('click', myFunction);
});