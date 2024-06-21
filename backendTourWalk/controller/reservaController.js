//cSpell:disable
const reservaModel = require('../models/reserva.model');
const destinoModel = require('../models/destino.model')

exports.crearReserva = async(req, res)=>{
    try {
        const destinoReserva = await destinoModel.findById(req.body.idDestino);
        if (!destinoReserva) {
            return res.status(404).json({ message: 'Destino no encontrado' });
        }
        const reserva = new reservaModel(req.body)
        await reserva.save()
        res.status(201).json({ message: 'Reservacion exitosa', reserva });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



exports.eliminarReserva = async (req, res) => {
    try {
        const reservaId = req.params.id; 
        const reservaEliminada = await reservaModel.findByIdAndDelete(reservaId);

        if (!reservaEliminada) {
            return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }

        res.status(200).json({ mensaje: 'Reserva eliminada exitosamente', reserva: reservaEliminada });
    } catch (error) {
        res.status(400).json({ error: error.mensaje });
    }
}
