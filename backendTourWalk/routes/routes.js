const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
const destinoController = require("../controller/destinoController");

router.post("/registrar-usuario", usuarioController.registrarUsuario);
router.post("/login-usuario", usuarioController.loginUsuario);
router.get("/consultar-usuario", usuarioController.consultarUsuarios);
router.put("/actualizar-usuario", usuarioController.actualizarUsuario);

router.post("/crear-destino", destinoController.crearDestino);
router.get("/listar-destino", destinoController.obtenerDestinos);
router.put("/actualizar-destino", destinoController.actualizarDestino);
router.delete("/eliminar-destino", destinoController.eliminarDestino);

module.exports = router;
