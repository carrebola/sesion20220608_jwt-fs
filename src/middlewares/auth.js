const jwt = require('jsonwebtoken')
const BD = require('../bd')

const auth = (req, res, next)=>{
    
    try {
        //capturamos el token de la cabecera de la petición
        var token = req.headers.authorization //bearer 32a32d1f32d1f56f46dfd58
        token = token.split(' ')[1] // 32a32d1f32d1f56f46dfd58
        var autenticacion = false
        //desencriptamos el token
        var decoded = jwt.verify(token, process.env.SECRETO);
        const userID = decoded.data.id; // payload del token
        const user = decoded.data.usuario;
        console.log(BD[userID].user);
        //comprobamos que el usuario existe en nuestra base de datos inventada
        
        if(BD[userID].user == user){
            console.log('el usuario existe');
            autenticacion = true
            req.query.id = userID
            next()
        }
        else{
            res.status(500).json({
                error: true,
                mensaje: 'El token no es valido'
            })
        }
    } catch(err) {
        res.status(500).json({
            error: err,
            mensaje: 'Se ha producido un error con el token'
        })
    }

   
}

module.exports = auth