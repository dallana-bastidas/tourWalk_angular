const usuarioModel = require('../models/usuario.model');

exports.registrarUsuario = async(req, res) =>{
  try {
    const usuario = new usuarioModel(req.body);
    await usuario.save();
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.loginUsuario = async(req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await usuarioModel.findOne({ email });

    if (!usuario) {
      return res.status(403).json({ error: 'Usuario no encontrado' });
    }

    if (password !== usuario.password) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};