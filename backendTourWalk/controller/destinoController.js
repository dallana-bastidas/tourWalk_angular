const destinoModel = require('../models/destino.model');

// Crear un nuevo destino
exports.crearDestino = async (req, res) => {
    try {
        const destino = new destinoModel(req.body);
        await destino.save();
        res.status(201).json(destino);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el destino', error });
    }
};

// Obtener todos los destinos
exports.obtenerDestinos = async (req, res) => {
    try {
        const destinos = await destinoModel.find();
        res.status(200).json(destinos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los destinos', error });
    }
};


// Actualizar un destino existente
exports.actualizarDestino = async (req, res) => {
    const { destinoId } = req.params;
    const { nombre, descripcion, precio, fechasDisponibles } = req.body;
    try {
        const destinoActualizado = await Destino.findByIdAndUpdate(
            destinoId,
            { nombre, descripcion, precio, fechasDisponibles },
            { new: true }
        );
        res.status(200).json(destinoActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el destino', error });
    }
};

// Eliminar un destino
exports.eliminarDestino = async (req, res) => {
    const { destinoId } = req.params;
    try {
        await Destino.findByIdAndDelete(destinoId);
        res.status(200).json({ mensaje: 'Destino eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el destino', error });
    }
};
