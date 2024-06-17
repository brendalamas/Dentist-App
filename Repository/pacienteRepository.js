const Movies = require('./PacienteBack');
const conectarDB = require('../db/db');
const PacienteBack = require('./PacienteBack');

//Nos conectamos a nuestra DB
conectarDB()


exports.getPacientesRepo = async () => {
    try {
        let Pacientes = await PacienteBack.find();
        console.log(Pacientes);
        return Pacientes;
    } catch (error) {
        console.log(error);        
    }
}

exports.getPacienteRepo = async (dni_ingresado) => {
    try {
        let paciente = await PacienteBack.findOne({ dni: dni_ingresado });
        console.log(paciente);
        return paciente;
    } catch (error) {
        console.log(error);        
    }
}

exports.createPacienteRepo = async(paciente) => {
    try {
        let newPaciente = new PacienteBack(paciente);
        await newPaciente.save();
    } catch (error) {
        console.log(error)
    }
}

exports.deletePacienteRepo = async (dni_ingresado) => {
    try {
        let paciente = await PacienteBack.findOne({ dni: dni_ingresado });
        if(!paciente){
            console.log("No existe el paciente")
            return "No se encontró el paciente"
        } else {
            await PacienteBack.findOneAndDelete({_id: paciente._id});
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.updatePacientesRepo = async (dni_ingresado, paciente) => {
    try {
        
        // Buscar el paciente por DNI
        const paciente_filtrado = await PacienteBack.findOne({ dni: dni_ingresado });

        if (paciente_filtrado) {
        // Modificar las propiedades del documento
        paciente_filtrado = paciente;

        // Guardar el documento actualizado en la base de datos
        const PacienteActualizado = await paciente_filtrado.save();
        console.log('Paciente actualizado:', PacienteActualizado);
        } else {
        console.log('Paciente no encontrado');
        }
        
    } catch (error) {
        console.log(error)
    }
}