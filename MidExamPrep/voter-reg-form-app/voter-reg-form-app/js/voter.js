


const voterNo = document.getElementById("voterNo");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const levelOfStudy = document.getElementById("levelOfStudy");

form.onSubmit = function(event){
    event.preventDefault();

    let message = document.getElementById("message2");

    message.innerHTML = `
    Voter Number: ${voterNo.value}
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Level of Study ${levelOfStudy.value}`
    ;


}
