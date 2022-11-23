/**
 * accountDAO.js
 */
"use strict"
import { Account } from "../models/account.js";

export class AccountDAO{
    #accounts=[
    new Account("01-980-0001", "James H. Karvill", "Saving"),
    new Account("01-980-0002", "Anna Hernandez-Diaz", "Checking")
];
    getAccounts(){
        return this.#accounts;
}
    addAccount(newAccount){
        this.#accounts.push(newAccount);
    }
}