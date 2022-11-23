/**
 * index.js
 */
"use strict"

import express from "express";
import path from "path";
import{HomeRouter} from"./routes/homeRouter.js"
import{AccountRouter} from "./routes/accountRouter.js";
import url from "url";
const PORT = 3000;
const app = express();
const __dirname = url.fileURLToPath(import.meta.url);

app.use(express.urlencoded({extended:false}));

app.use("/static", express.static("public"));

app.set("/views", path.join(__dirname,"./views"));
app.set("view engine","pug");

app.get("/accounts",AccountRouter);
app.post("/accounts-form",AccountRouter)

app.use("/",HomeRouter)


app.listen(PORT,(req,res)=>{
    console.log("listening on port "+ PORT);
});