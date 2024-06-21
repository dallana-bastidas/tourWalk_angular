//cSpell:disable
const express = require('express')
const router  = express.Router();
const usuarioController =require('../controller/usuarioController');
const destinoController =require('../controller/destinoController');
const reservaController = require('../controller/reservaController');

router.post('/registrar-usuario', usuarioController.registrarUsuario);
router.post('/login-usuario', usuarioController.loginUsuario);
router.get('/consultar-usuarios', usuarioController.consultarUsuarios);
router.get('/consultar-usuario/:id', usuarioController.consultarUsuario)
router.put('/actualizar-usuario', usuarioController.actualizarUsuario);
router.delete('/eliminar-usuario', usuarioController.eliminarUsuario);


router.post('/crear-destino', destinoController.crearDestino);
router.get('/listar-destinos', destinoController.obtenerDestinos);
router.put('/actualizar-destino/:id', destinoController.actualizarDestino);
router.delete('/eliminar-destino', destinoController.eliminarDestino);
router.post('/crear-reserva', reservaController.crearReserva);
router.delete('/eliminar-reserva/:id',reservaController.eliminarReserva )

module.exports= router;