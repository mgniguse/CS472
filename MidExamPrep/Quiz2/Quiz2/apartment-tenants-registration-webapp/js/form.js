const form = document.getElementById("form");
const buildingNo = document.getElementById("buildingNo");
const floorNo = document.getElementById("floorNo");
const apartmentNo = document.getElementById("apartmentNo");
const title = document.getElementById("title");
const fullNames = document.getElementById("fullNames");
const phoneNo = document.getElementById("phoneNo");
const email = document.getElementById("email");
const driversLicense = document.getElementById("driversLicenceNo");


form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Building Number: ${buildingNo.value}
    Floor Number: ${floorNo.value}
    Apartment Number: ${apartmentNo.value}
    Title: ${title.value}
    Full Names: ${fullNames.value}
    Phone Number: ${phoneNo.value}
    Email: ${email.value}
    Driver's License: ${driversLicense.value}
    
    `)
    form.reset();


}
