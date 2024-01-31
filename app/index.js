import express from "express"
//arreglazo para dirname lol 
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));



//server 
const app = express();
app.set("port", 3000);
app.listen(app.get("port"));
console.log("server activo on puerto",app.get("port"))

//config
app.use(express.static(__dirname + "/publicazo"))


//routes 
app.get("/",(req,res)=> res.sendFile(__dirname + "/paginitas/login.html"))
app.get("/register",(req,res)=> res.sendFile(__dirname + "/paginitas/register.html"))

