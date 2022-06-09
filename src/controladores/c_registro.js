//para encriptar contraseñas
const bcrypt = require('bcrypt')


const BD = require('../bd')
const c_registro = (req, res)=>{
    const user = req.body.user
    const pass = req.body.pass

    //encriptamos password con bcrypt
    const saltRounds = 10 //numero de iteraciones de encriptación
    //hast => contraseña encriptada
    const hash = bcrypt.hashSync(pass, saltRounds);
    

    const usuario = {
        id: BD.length,
        user: user,
        pass: hash,
        roles: ['registrado']
    }
    BD.push(usuario)
    res.json({
        usuario,
        mensaje: 'usuario registrado'
    })
}

module.exports = c_registro