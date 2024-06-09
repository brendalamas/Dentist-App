

exports.getPacientes = async (req, res) => {
    try {
        let pacientes = await pacienteService.getPacientes();
        res.status(200).send(pacientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al solicitar los pacientes")
    }
}

exports.getPaciente = async () => {
    
}

exports.createPaciente = async (req, res) => {
    try {
        await movieService.createPaciente(req.body)
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al crear la película.")
    }
}

exports.updatePaciente = async () => {
    
}

exports.deletePaciente = async () => {
    
}