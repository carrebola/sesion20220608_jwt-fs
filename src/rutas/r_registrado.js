const express = require('express')
const auth = require('../middlewares/auth')
const r_registrado = express.Router()

const c_registrado = require('../controladores/c_registrado')

//ruta login post que recibe por body (user y pass)
r_registrado.get('/', auth, c_registrado)

module.exports = r_registrado