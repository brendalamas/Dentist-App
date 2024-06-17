const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true 
        },
        apellido: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dni: {
            type: Number,
            required: true
        },
        fecha_cons: {
            type: String,
            required: true
        },
        razon_cons: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Pacientes', pacienteSchema)

