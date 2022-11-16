/* KIU.js*/
"use strict"

const form = document.getElementById("form");
const firstName= document.getElementById("firstName")
const middleName= document.getElementById("MiddleName")
const lastName= document.getElementById("lastName")


form.onsubmit = function (event) {
    event.preventDefault();

    alert(`
    Level of Study : ${}
    Applican's full Name:${firstName.value lastName.value}
  
    Date of birth: ${dateOfBirth.value}
    Department : ${department.value}
    Out Patient? ${radioBtn.value}
    `
    );

  form.reset(); 
   

}


