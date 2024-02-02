import bcryptjs from "bcryptjs";

const usuarios  = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]


async function login(req,res){
}

async function register(req,res){
    console.log(req,body)
    const user = req.body.user; 
    const password = req.body.password; 
    const email = req.body.email; 
    if(!user || !password || !email){
        return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
        return res.status(400).send({status:"Error",message:"existencia de usuario confirmada"})
    }
    const salt = await bcryptjs.genSalt(5)
    const hashPassword = await bcryptjs.hash(password,salt)
    const nuevoUsuario ={
        user, email, password: hashPassword
    }
    usuarios.push(nuevoUsuariosuarios);
    console.log(usuario);
    res.status(201).send({status:"ok",message:`Usuario ${nuevoUsuario.user} agregado`,redirect:"/"})
}




export const methods = {
    login,
    register
  }