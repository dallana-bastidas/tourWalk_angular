const express = require('express')
const router  = express.Router();
const productoControllerv =require('../controller/productoController')

// router.post('/',()=>{
//   console.log ('estamos creando producto');
// })

router.post('/',productoController.crearProducto);

module.exports= router;