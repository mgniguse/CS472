const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const accountNumber = document.getElementById("accountNumber");
const accountType = document.getElementById("accountType");



form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Account Ownership Type

    Customer Information
    Full Name: ${fullName.value}
    Address: ${address.value}
    Account Information
    Account Number: ${accountNumber.value}
    Account Type: ${accountType.value}
    `);

    form.reset();
}


