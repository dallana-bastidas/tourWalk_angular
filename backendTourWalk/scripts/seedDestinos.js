const mongoose = require('mongoose');
const conectarDB = require('../config/db');
const Destino = require('../models/destino.model');

// Conectar a la base de datos
conectarDB();

const destinosAmazonia = [
    {
        nombre: "Leticia",
        descripcion: "Capital de Amazonas, Leticia ofrece biodiversidad, avistamiento de aves y acceso al Parque Nacional Natural Amacayacu, explorando ríos y selvas.",
        precio: 120,
        imagenes: ["assets/img/amazonia/leticia.png"],
        fechasDisponibles: ["2024-08-20", "2024-09-15"],
        zona: "amazonia"
    },
    {
        nombre: "Puerto Nariño",
        descripcion: "Pueblo sin vehículos, Puerto Nariño ofrece paseos en bote por el Amazonas, avistamiento de delfines rosados y culturas indígenas locales.",
        precio: 150,
        imagenes: ["assets/img/amazonia/puero rico.jpg"],
        fechasDisponibles: ["2024-08-25", "2024-09-18"],
        zona: "amazonia"
    },
    {
        nombre: "Parque Natural",
        descripcion: "Refugio de biodiversidad, el parque ofrece caminatas guiadas, observación de jaguares, manatíes y aves exóticas, y vida amazónica.",
        precio: 200,
        imagenes: ["assets/img/amazonia/parque nacional.png"],
        fechasDisponibles: ["2024-08-30", "2024-09-20"],
        zona: "amazonia"
    },
    {
        nombre: "Reserva Natural",
        descripcion: "Cerca de Leticia, ofrece canopy, caminatas nocturnas y visitas a comunidades indígenas en un entorno conservado para ecoturismo.",
        precio: 180,
        imagenes: ["assets/img/amazonia/parque natural.png"],
        fechasDisponibles: ["2024-09-01", "2024-09-25"],
        zona: "amazonia"
    }
];
const destinosPacifico = [
    {
        nombre: "Nuquí",
        descripcion: "Un paraíso para el ecoturismo y el avistamiento de ballenas, Nuquí ofrece playas prístinas y la oportunidad de explorar la selva tropical.",
        precio: 250,
        imagenes: ["assets/img/pacifico/nuqui.jpg"],
        fechasDisponibles: ["2024-08-22", "2024-09-10"],
        zona: "pacifico"
    },
    {
        nombre: "Bahía Solano",
        descripcion: "Conocido por su biodiversidad, Bahía Solano ofrece buceo, pesca deportiva y recorridos por la selva.",
        precio: 220,
        imagenes: ["assets/img/pacifico/bahia-solano.jpg"],
        fechasDisponibles: ["2024-08-27", "2024-09-17"],
        zona: "pacifico"
    },
    {
        nombre: "Gorgona",
        descripcion: "Isla Parque Nacional Natural, Gorgona es un destino ideal para el buceo, con arrecifes de coral, tiburones y una rica vida marina.",
        precio: 300,
        imagenes: ["assets/img/pacifico/playa1.jpg"],
        fechasDisponibles: ["2024-09-05", "2024-09-22"],
        zona: "pacifico"
    },
    {
        nombre: "Tumaco",
        descripcion: "Conocida como la Perla del Pacífico, Tumaco ofrece playas exóticas, una rica cultura afrocolombiana y actividades acuáticas.",
        precio: 180,
        imagenes: ["assets/img/pacifico/PARQUE NATURAL PACIFICO1.jpg"],
        fechasDisponibles: ["2024-09-10", "2024-09-27"],
        zona: "pacifico"
    }
];
const destinosAtlantico = [
    {
        nombre: "Cartagena",
        descripcion: "Ciudad histórica y turística, Cartagena es conocida por sus murallas, el Castillo de San Felipe y playas caribeñas.",
        precio: 200,
        imagenes: ["assets/img/atlantico/cartagena.webp"],
        fechasDisponibles: ["2024-08-18", "2024-09-12"],
        zona: "atlantico"
    },
    {
        nombre: "Santa Marta",
        descripcion: "Con playas hermosas y el Parque Nacional Natural Tayrona, Santa Marta es un destino ideal para el descanso y la aventura.",
        precio: 180,
        imagenes: ["assets/img/atlantico/Sierra Nevada.jpg"],
        fechasDisponibles: ["2024-08-21", "2024-09-15"],
        zona: "atlantico"
    },
    {
        nombre: "Barranquilla",
        descripcion: "Conocida por su Carnaval, Barranquilla ofrece una mezcla de cultura, música y gastronomía del Caribe.",
        precio: 160,
        imagenes: ["assets/img/atlantico/barranquilla.jpg"],
        fechasDisponibles: ["2024-08-25", "2024-09-20"],
        zona: "atlantico"
    },
    {
        nombre: "San Andrés",
        descripcion: "Isla caribeña famosa por sus playas de arena blanca, aguas cristalinas y cultura isleña.",
        precio: 240,
        imagenes: ["assets/img/atlantico/sanAndres.jpg"],
        fechasDisponibles: ["2024-08-28", "2024-09-25"],
        zona: "atlantico"
    }
];
const destinosAndina = [
    {
        nombre: "Bogotá",
        descripcion: "Capital de Colombia, Bogotá ofrece museos, vida nocturna y una rica oferta cultural.",
        precio: 100,
        imagenes: ["assets/img/andina/bogota.jpg"],
        fechasDisponibles: ["2024-08-19", "2024-09-14"],
        zona: "andina"
    },
    {
        nombre: "San Gil",
        descripcion: "Capital de deportes extremos, ofrece rafting, parapente, espeleología y senderismo. Ideal para aventureros buscando emociones fuertes y paisajes espectaculares.",
        precio: 150,
        imagenes: ["assets/img/andina/san gil.jpg"],
        fechasDisponibles: ["2024-08-23", "2024-09-18"],
        zona: "andina"
    },
    {
        nombre: "Villa de Leyva",
        descripcion: "Pueblo colonial con arquitectura bien conservada, Villa de Leyva ofrece historia, naturaleza y tranquilidad.",
        precio: 120,
        imagenes: ["assets/img/andina/villa de leyva.jpg"],
        fechasDisponibles: ["2024-08-29", "2024-09-21"],
        zona: "andina"
    },
    {
        nombre: "Valle de Cocora",
        descripcion: "Pueblo colorido y valle con palmas de cera gigantes, senderismo y café. Perfecto para naturaleza, fotografía y cultura cafetera.",
        precio: 200,
        imagenes: ["assets/img/andina/valleDECocora.jpg"],
        fechasDisponibles: ["2024-09-03", "2024-09-24"],
        zona: "andina"
    }
];

const destinos = [
    ...destinosAmazonia,
    ...destinosPacifico,
    ...destinosAtlantico,
    ...destinosAndina,
];

Destino.insertMany(destinos)
    .then(() => {
        console.log('Destinos insertados con éxito');
        mongoose.connection.close(); // Cierra la conexión después de insertar los datos
    })
    .catch((error) => {
        console.error('Error al insertar destinos:', error);
        mongoose.connection.close();
    });
