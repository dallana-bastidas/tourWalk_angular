//cSpell:disable
const reservaModel = require("../models/reserva.model");
const destinoModel = require("../models/destino.model");
const { Query } = require("mongoose");

exports.crearReserva = async (req, res) => {
  try {
    const destinoReserva = await destinoModel.findById(req.body.idDestino);
    if (!destinoReserva) {
      return res.status(404).json({ message: "Destino no encontrado" });
    }
    const reserva = new reservaModel(req.body);
    await reserva.save();
    res.status(201).json({ message: "Reservacion exitosa", reserva });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// listar reserva por el id del usuario

exports.consultarReserva = async (req, res) => {
 try {
    const idUsuario = req.body.idUsuario;
    if (!idUsuario){
        return res.status(400).json({message: "Usuario no encontrado"})
    }
    let reservaData = await reservaModel.find({
      idUsuario: req.body.idUsuario,
    });
    if  (!reservaData){
        res.status(400).json({message:"no se encontro reserva"})
    }else{
        res.status(201)
    }
 } catch (error) {
    console.log(error)
    res.status(400).send("hubo un error al consultar su reserva")

 }
};
