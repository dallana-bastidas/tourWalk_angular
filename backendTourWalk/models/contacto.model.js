//cSpell:disable
const mongoose = require("mongoose");

const ContactoSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },

  correoElectronico: {
    type: String,
    require: true,
  },

  asunto: {
    type: String,
    require: true,
  },

  comentario: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("contacto", ContactoSchema);
