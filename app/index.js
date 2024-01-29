import  express  from "express";

//server 
const app = express();
app.set("port",4000)
app.listen(app.get("port"));
console.log("servidor on puerto", app.get("port"))