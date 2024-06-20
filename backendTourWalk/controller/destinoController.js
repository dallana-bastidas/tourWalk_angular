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
exports.actualizarDestino= async(req, res) => {
    try {
        const {nombre, descripcion, precio, imagenes, fechasDisponibles } = req.body;
        let destino = await destinoModel.findById(req.params.id)

        if (!destino) {
            res.status(404).send({ mensaje: "No se encontró la pelicula" })
            return
        }

        destino.nombre = nombre;
        destino.descripcion = descripcion;
        destino.precio = precio;
        destino.imagenes = imagenes;
        destino.fechasDisponibles = fechasDisponibles;

        await destinoModel.findByIdAndUpdate(req.params.id, destino);
        res.status(200).send({ mensaje: "Destino actualizado", destino })

    } catch (error) {
        console.log(error);
        res.status(500).send("No se pudo actualizar el destino");
    }
}

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
