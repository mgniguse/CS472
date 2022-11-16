

const patient = document.getElementById('patient');
const firstName = document.getElementById('firstName');
const middle = document.getElementById('middle');
const lastName = document.getElementById('lastName');
const birth = document.getElementById('birth');
const department = document.getElementById('dep');
const radio = document.getElementsByName('radio');


const form = document.getElementById('form');

form.onsubmit = (event)=>{
    event.preventDefault();
    
const rdoSeniorCitizenSelectedValue = document.querySelector("input[name='radio']:checked").value;
    alert(`
    Patient: ${patient.value}
    First Name: ${firstName.value}
    Middle: ${middle.value}
    Last Name: ${lastName.value}
    Birth: ${birth.value}
    Department: ${department.value}
    Radio: ${rdoSeniorCitizenSelectedValue}
    `)
    
}

