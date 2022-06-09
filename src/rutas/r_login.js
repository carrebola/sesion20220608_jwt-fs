const express = require('express')
const r_login = express.Router()

const c_login = require('../controladores/c_login')

//ruta login post que recibe por body (user y pass)
r_login.post('/', c_login)

module.exports = r_login