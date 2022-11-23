/**
 * account.js
 */
"use strict"
export class Account{
    #accountNo;
    #accountName;
    #accountType;
    constructor(accountNo,accountName, accountType){
        this.#accountNo = accountNo;
        this.#accountName = accountName;
        this.#accountType = accountType;
    }
    getAccountNo(){
        return this.#accountNo;
    }
    getAccountName(){
        return this.#accountName;
    }
    getAccountType(){
        return this.#accountType;
    }
    
}