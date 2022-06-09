//master


//librerias de node_modules
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')


//rutas
const r_login = require('./rutas/r_login')
const r_registrado = require('./rutas/r_registrado')
const r_registro = require('./rutas/r_registro')
const r_usuarios = require('./rutas/r_usuarios.js')
const r_upload = require('./rutas/r_upload')
const r_borrarArchivo = require('./rutas/r_borrarArchivo')



const app = express()
//para usar variables de entorno
dotenv.config()

//mostrando peticiones
app.use(morgan('tiny'))

//Para parsear automaticamente datos en el body de las peticiones
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ruta general
app.get('/', (req, res)=>{
    res.send('<h1>API con JWT</h1>')
})

//endpoints
app.use('/api/login', r_login)
app.use('/api/registrado', r_registrado)
app.use('/api/usuarios', r_usuarios)
app.use('/api/registro', r_registro)
app.use('/api/upload', r_upload)
app.use('/api/borrararchivo', r_borrarArchivo)
//levantamos servidor
app.listen(process.env.PORT, ()=>{
    console.log('servidor escuchando en ', process.env.PORT);
})

