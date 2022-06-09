const express = require('express')
const r_usuarios = express.Router()
const auth = require('../middlewares/auth')
const roles = require('../middlewares/roles')


const c_usuarios = require('../controladores/c_usuarios')

//ruta login post que recibe por body (user y pass)
r_usuarios.get('/', auth, roles(['admin']) , c_usuarios)

module.exports = r_usuarios