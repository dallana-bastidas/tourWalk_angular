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

  pais: {
    type: String,
    require: true,
  },

  telefono:{
    type: String,
    require:true,
  },

  comentario:{
    type: String,
    require:true,
  }
});
