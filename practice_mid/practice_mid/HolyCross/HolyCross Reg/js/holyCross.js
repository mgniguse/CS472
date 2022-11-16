

const patient = document.getElementById('patient');
const firstName = document.getElementById('firstName');
const middle = document.getElementById('middle');
const lastName = document.getElementById('lastName');
const birth = document.getElementById('birth');
const department = document.getElementById('dep');
const radio = document.getElementsByName('radio');
// const radioValue = document.querySelector('input[name="radio"]:checked').value;

const form = document.getElementById('form');

// const isOut = [...radio].filter(radio => radio.checked)[0];

form.onsubmit = (event)=>{
    event.preventDefault();
    // const all = `
    
const rdoSeniorCitizenSelectedValue = document.querySelector("input[name='radio']:checked").value;
    alert(`
    Patient ${patient.value}
    First Name ${firstName.value}
    Middle ${middle.value}
    Last Name ${lastName.value}
    Birth ${birth.value}
    Department ${department.value}
    Radio ${rdoSeniorCitizenSelectedValue}
    `)
    

    
    // alert();
}

