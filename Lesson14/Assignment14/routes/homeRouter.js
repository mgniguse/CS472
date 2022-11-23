/**
 * homeRouter.js
 */
"use strict"
import  express  from "express";

export const HomeRouter = express.Router();

HomeRouter.get("/index.html",(req,res)=>{
    res.render("index")});
HomeRouter.get("/index",(req,res)=>{
    res.render("index")
});   
HomeRouter.get("/home",(req,res)=>{
    res.render("index")
}); 
HomeRouter.get("/",(req,res)=>{
    res.render("index")
});


