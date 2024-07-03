//cSpell:disable
const contactoModel = require("../models/contacto.model");

// Crear un nuevo contacto
exports.crearContacto = async (req, res) => {
  try {
    const contacto = new contactoModel(req.body);
    await contacto.save();
    res.status(201).json(contacto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el contacto", error });
  }
};


// Actualizar un contacto existente
exports.actualizarContacto = async (req, res) => {
  try {
    const { nombre, correoElectronico, pais, telefono, comentario } = req.body;
    let contacto = await contactoModel.findById(req.params.id);

    if (!contacto) {
      res.status(404).send({ mensaje: "No se encontró el contacto" });
      return;
    }

    contacto.nombre = nombre;
    contacto.correoElectronico = correoElectronico;
    contacto.pais = pais;
    contacto.telefono = telefono;
    contacto.comentario = comentario;

    await contactoModel.findByIdAndUpdate(req.params.id, contacto);
    res.status(200).send({ mensaje: "Contacto actualizado", contacto });
  } catch (error) {
    console.log(error);
    res.status(500).send("No se pudo actualizar el contacto");
  }
};

// Eliminar un contacto
exports.eliminarContacto = async (req, res) => {
  const { contactoId } = req.params;
  try {
    await contactoModel.findByIdAndDelete(contactoId);
    res.status(200).json({ mensaje: "Contacto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el contacto", error });
  }
};
