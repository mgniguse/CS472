/**
 * app.js
 */

console.log("Welcome");

// function loadEventHandlers() {
//     const btnClickMe = document.getElementById("btnClickMe");
//     btnClickMe.addEventListener("click", function() {
//         alert("Hello");
//     });
// }

// window.onload = loadEventHandlers;

// Do NOT Pollute the Global Environment
window.onload = function(event) {
    const btnClickMe = document.getElementById("btnClickMe");
    btnClickMe.addEventListener("click", function() {
        // alert("Hello");
        const mainHeading = document.getElementById("mainHeading");
        // mainHeading.style.color = "red";
        mainHeading.className = "highlighted";
    });
    //...
    
};

