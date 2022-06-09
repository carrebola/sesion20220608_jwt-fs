const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//base de datos inventada
const BD=require('../bd')

const c_login =  (req, res)=>{
    //capturamos datos del body
    const user = req.body.user
    const pass = req.body.pass
    
    var token = false
    //recorremos los usuarios de la base de datos
    BD.forEach(usuario => {
      if(usuario.user == user){ //si existe ese usuario
        console.log(pass, usuario.pass);
          if(bcrypt.compareSync(pass, usuario.pass)){ // si la contrasea coincide
            //usuario y contraseña correcta
            //Creamos el token con el id del usuario como payload
            token = jwt.sign(
                { 
                    data: {
                        usuario: usuario.user,
                        id: usuario.id
                    } 
                }, //payload será el id del usuario
                process.env.SECRETO, 
                { expiresIn: 60 * 60 } // caduca en 1 hora (3600 segundos)
            );
            console.log(token);
            res.status(200).json({
                token: token,
                id:usuario.id,
                mensaje: 'estás logeado chaval ' + user
            })
          }
          else{ //si el usuario existe pero la contraseña no corresponde
              token=false
              res.status(500).json({
                  token: token,
                  mensaje: 'la contraseña no corresponde'
              })
          }
      }  
    }); //fin foreach

    //si no se ha encontrado un usuario en la base de datos
    if(!token){ //si el token vale falso
        console.log('no token');
        res.status(500).json({
            token: token,
            mensaje: 'No hay ningún usuario con ese nombre'
        })
    }
}
module.exports = c_login

