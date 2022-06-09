const express = require('express')
const r_registro = express.Router()

//para subir archivos
const multer = require('multer')
const uploads = multer({dest: 'archivos/'})

//controlador
const c_registro = require('../controladores/c_registro')

//ruta login post que recibe por body (user y pass)
r_registro.post('/', c_registro)

module.exports = r_registro