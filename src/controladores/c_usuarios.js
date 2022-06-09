const BD = require('../bd')
const c_usuarios = (req, res)=>{
    res.json({
        usuarios: BD,
        mensaje: 'Estás usando controlador c_usuarios'
    })
}

module.exports = c_usuarios