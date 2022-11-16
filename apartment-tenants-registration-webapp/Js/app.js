/**
 * app.js
 */
 "use strict"
const txtBuildingNo = document.getElementById('buildingNo');
const txtFloorNo = document.getElementById('floorNo');
const txtApartmentNo = document.getElementById('apartmentNo');
const txtTitle = document.getElementById('title');
const txtFullNames = document.getElementById('fullNames');
const txtPhoneNo = document.getElementById('phoneNo');
const txtEmail = document.getElementById('email');
const txtDriversLicenceNo = document.getElementById('driversLicenceNo');

form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    strBuildingNumber: ${buildingNo.value}
    strFloorNumber: ${floorNo.value}
    strApartmentNumber: ${apartmentNo.value}
    strTitle: ${title.value}
    strFullNames: ${fullNames.value}
    strPhoneNumber: ${phoneNo.value}
    strEmail: ${email.value}
    strDriversLicense: ${driversLicense.value}
    
    `)
    // form.reset();
    buildingNo.value= "";
    floorNo.value="";
    apartmentNo.value="";
    title.value="";
    fullNames.value="";
    phoneNo.value="";
    email.value="";
    driversLicense.value="";
}
