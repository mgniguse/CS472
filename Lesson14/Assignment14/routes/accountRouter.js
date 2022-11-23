/**
 * accountRouter.js
 */
"use strict"
import  express  from "express";
// import { render } from "pug";
import { AccountController} from "../controller/accountController.js";

export const AccountRouter = express.Router();
const accountController = new AccountController();

AccountRouter.get("/accounts",(req,res)=>{
    
    const accounts =accountController.getAccounts();
    res.render("account",{Accounts: accounts});
});
AccountRouter.post("/accounts-form",(req,res)=>{
    const accountNo = req.body.txtAccountNo;
    const accountName = req.body.txtCustomerName; 
    const accountType = req.body.ddlAccountType; 
    accountController.addAccount(accountNo,accountName,accountType);

    res.redirect(303, "/accounts");
});
// AccountRouter.get("/accounts",(req,res)=>{
//     console.log("accounts");
//     const accounts = accountController.getAccounts();
//     res.render("account",{accounts:accounts});
// });