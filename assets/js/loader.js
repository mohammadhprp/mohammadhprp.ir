//hide the loader after page is loaded fully
var loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.height = "100%";
    loader.style.width = "100%";

    loader.style.visibility = "hidden";
});


