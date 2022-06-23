
function test() {
    document.getElementById("input").value += document.getElementById("Button").value;
}

document.getElementById("Button").addEventListener("click", test);