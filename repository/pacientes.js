const mongoose = require('mongoose');
const { type } = require('os');

const pacienteSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true
        },
        
        dni: {
            type: Number,
            require: true
        },

        edad: {
            type: Number,
            require: true
        },

        dolencia: {
            type: String,
            require: true
        }
    }
);

module.exports = mongoose.model('pacientes',pacienteSchema);