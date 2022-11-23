/**
 * accountController.js
 */
"use strict"
import { Account } from "../models/account.js";
import { AccountDAO } from "../dao/accountDAO.js";

export class AccountController{
    #accountDAO = new AccountDAO();

    getAccounts(){
        return this.#accountDAO.getAccounts();
    }

    addAccount(accountNo, accountName, accountType){
        this.#accountDAO.addAccount(
            new Account(accountNo,accountName,accountType)
        );
    }
}
    
