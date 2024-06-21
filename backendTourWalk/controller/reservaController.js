const reservaModel = require('../models/reserva.model');

exports.crearReserva = async(req, res)=>{
    try {
        const reserva = new reservaModel(req.body);
        await reserva.save();
        res.status(201).json({mensaje:'Reservacion exitosa'})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}