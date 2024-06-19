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
    fechasDisponibles: [{
        type: Date,
        required: true
    }],
});

module.exports = mongoose.model('Destino', DestinoSchema);



// Importa el módulo 'mongoose', que es una biblioteca de modelado de objetos para MongoDB y Node.js.
const mongoose = require('mongoose');
// Define un nuevo esquema para el modelo 'Destino'.
const DestinoSchema = mongoose.Schema({
        nombre: {// Campo 'nombre' del esquema, que es de tipo String y es obligatorio.
        type: String,
        required: true
    },
    descripcion: {// Campo 'descripcion' del esquema, que es de tipo String y es obligatorio.
        type: String,
        required: true
    },
    precio: { // Campo 'precio' del esquema, que es de tipo Number y es obligatorio.
        type: Number,
        required: true
    },    // Campo 'fechasDisponibles' del esquema, que es un array de fechas (Date) y es obligatorio.
    fechasDisponibles: [{
        type: Date,
        required: true
    }]
});// Exporta el modelo 'Destino' basado en 'DestinoSchema', permitiendo que sea utilizado en otras partes de la aplicación.
module.exports = mongoose.model('Destino', DestinoSchema);
