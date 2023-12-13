const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },

    rut:{
        type: String,
        required: true
    },

    examen:{
        type: String,
        required: true
    },

    medico:{
        type: String,
        required: true
    },

    motivo:{
        type: String,
        required: true
    },

    fecha:{
        type: String,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', pacienteSchema);