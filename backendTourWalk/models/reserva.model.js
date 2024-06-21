//cSpell:disable
const mongoose = require('mongoose');

const ReservaSchema = mongoose.Schema({
    idUsuario:{
        type: String,
        require: true
    },
    idDestino:{
        type: String,
        require: true
    },
    cantidadPersonas:{
        type: Number,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    fechasDisponibles: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Reserva', ReservaSchema);