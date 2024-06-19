const express = require('express')
const router  = express.Router();
const usuarioController =require('../controller/usuarioController');
const destinosController =require('../controller/destinoController');

router.post('/registrar-usuario', usuarioController.registrarUsuario)
router.post('/login-usuario', usuarioController.loginUsuario)






module.exports= router;