/** 
 * 
 * account.js*/ 
"use strict";

window.onload = function(){
    const account = document.getElementById("account");
    account.addEventListener("submit",event=>{
        const FullName = document.getElementById("fName");
        const Address = document.getElementById("address");
        const AccountNumber = document.getElementById("acc");
        const TypeOfAccount = document.getElementById("typeacc");
        const AccountOwnerShipType = account.elements[("Account")];
         alert(` 
         
       Customer FullName:${FullName.value},
        Address:${Address.value},
        AccountNumber:${AccountNumber.value},
        Type Of Account:${TypeOfAccount.value},
       
     `);
    });
       // proffessor the printing for the radio button isn't printing to the window but others are.
}
