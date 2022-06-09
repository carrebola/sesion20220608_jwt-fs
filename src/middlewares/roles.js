
const BD = require('../bd')
const roles = (arrayRoles=[])=>{
    console.log('estas pasando por roles', arrayRoles);
    return (
        (req,res,next)=>{
            console.log(arrayRoles);
            //recupero el id del usuasrio logeado
            const id = req.query.id;
            //consulto los roles del usuario
            const rolesUsuario = BD[id].roles
            console.log(rolesUsuario);

            //comprobamos si el usuario tiene los roles necesarios
            arrayRoles.forEach(rol => {
                if(rolesUsuario.includes(rol)){
                    console.log('es', rol);
                    next()
                }
                else{
                    console.log('este no es ', rol);
                    res.status(500).json({
                        mensaje: 'no tienes permisos'
                    })
                }
            });
            
                    }
    )
} 

module.exports = roles