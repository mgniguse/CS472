/**
 * app.js
 */
window.onload = function () {

    const form = document.getElementById("form");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    

    form.addEventListener("submit",test);

    function test(){
        console.log("The email address:" + emailField.value);
        console.log("password: " + passwordField.value);

        form.reset();
    }
    
}




