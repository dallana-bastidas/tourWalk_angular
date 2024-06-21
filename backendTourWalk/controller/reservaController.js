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