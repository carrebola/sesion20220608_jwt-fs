const express = require('express')
const r_upload = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'archivos/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
  })
  
const upload = multer({ storage: storage })

//ruta login post que recibe un archivo 
r_upload.post('/', upload.single('avatar'), (req, res)=>{
    res.json({
        mensaje: 'archivo subido',
        extension: req.file.originalname.split('.')[1]
    })
})



module.exports = r_upload