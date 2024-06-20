const mongoose = require('mongoose');

const DestinoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagenes:{
        type: [],
        require:true //multter
    },
    fechasDisponibles: [{
        type: Date,
        required: true
    }],
});

module.exports = mongoose.model('Destino', DestinoSchema);