import express from "express"
//arreglazo para dirname lol 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./controllers/authentication.controller.js";


//server 
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("server activo on puerto",app.get("port"));

//config
app.use(express.static(__dirname + "/publicazo"));
app.use(express.json());

//routes 
app.get("/",(req,res)=> res.sendFile(__dirname + "/paginitas/login.html"));
app.get("/register",(req,res)=> res.sendFile(__dirname + "/paginitas/register.html"));
app.get("/admin",(req,res)=> res.sendFile(__dirname + "/paginitas/admin/admin.html"));
app.post("/api/register",authentication.register);
app.post("/api/login",authentication.login);
  