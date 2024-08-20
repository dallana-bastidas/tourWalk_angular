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
    imagenes: {
        type: [String], // Almacenar las rutas de las imágenes
        required: true
    },
    fechasDisponibles: {
        type: [Date], // Almacenar las fechas como un array de fechas
        required: true
    },
    zona: {
        type: String, // Para identificar la zona (Pacífico, Atlántico, Amazonía, Andina)
        required: true
    }
});

module.exports = mongoose.model('Destino', DestinoSchema);