//cSpell:disable
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

exports.consultarUsuarios = async (req,res) =>{
  try {
    const usuarios = await usuarioModel.find();
    res.status(201).send(usuarios);
  }catch (error){
    console.log(error);
    res.status(400).send('Hubo un problema al consultar el usuario');
  }
};


exports.actualizarUsuario= async(req,res)=>{
  try{
    const{nombre,apellido,email,password} =req.body;
    let usuarioData = await usuarioModel.findById(req.params.id)

    if(!usuarioData){
      res.status(201).send({mensaje:"No se encontro el usuario"})
      return
    }

    usuarioData.nombre = nombre;
    usuarioData.apellido = apellido;
    usuarioData.email = email;
    usuarioData.password = password;

    await usuarioModel.findByIdAndUpdate(req.params.id,usuarioData);
    res.status(201).send({mensaje:"Usuario actualizado",usuarioData})

  }catch(error){
    console.log(error);
    res.status(400).send("Hubo un error al actualizar el usuario");
  }
}

exports.eliminarUsuario = async(req,res)=>{
  try{
    let usuarioData = await usuarioModel.findById(req.params.id)
    console.log ('usuarioData:',usuarioData)
    if (!usuarioData){
      res.status(201).send({mensaje:"No se encontró Usuario"})
      return
    }else{
      await usuarioModel.findByIdAndDelete (req.params.id);
      res.status(400).send({mensaje:"película eliminada"})
    }
  } catch (error){
    console.log(error);
    res.status(500).send("Hubo un problema al eliminar a el usuario")
  }

}

exports.eliminarUsuario = async(req,res)=>{
  try{
    let usuarioData = await usuarioModel.findById(req.params.id)
    console.log ('usuarioData:',usuarioData)
    if (!usuarioData){
      res.status(201).send({mensaje:"No se encontró Usuario"})
      return
    }else{
      await usuarioModel.findByIdAndDelete (req.params.id);
      res.status(400).send({mensaje:"película eliminada"})
    }
  } catch (error){
    console.log(error);
    res.status(500).send("Hubo un problema al eliminar a el usuario")
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