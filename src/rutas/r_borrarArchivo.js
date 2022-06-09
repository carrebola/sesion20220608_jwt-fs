
const express = require('express')
const fs = require('fs-extra')
const r_borrarArchivo = express.Router()

r_borrarArchivo.delete('/:id', (req,res)=>{
    const nombreArchivo = req.params.id
    console.log(nombreArchivo);
    // With async/await:
    async function example (src, dest) {
        try {
            await fs.remove('archivos/'+src)
            res.status(200).json({
                mensaje: 'borrando archivo '+src
            })
        } catch (err) {
            res.status(500).json({
                mensaje: 'error al borrar el archivo '
            })
        }
    }
    
    example(nombreArchivo)

    

})

module.exports = r_borrarArchivo