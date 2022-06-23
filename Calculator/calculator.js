let elements = document.getElementsByClassName("Button");

let myFunction = function (event) {
    document.getElementById("input").value += event.target.value;
};

Array.from(elements).forEach(function (element) {
    element.addEventListener('click', myFunction);
});


//If the ID of the clicked button is === "multiply" OR ""

let ids = [];

for (let i = 0; i <= elements.length; i++) {

    ids[i] = elements[i].id;
    console.log(ids);

}

for (let j = 0; j <= ids.length; j++) {
    if (ids[j] !== '') {
        ids.splice(j, 1);
    }
}
console.log(ids);