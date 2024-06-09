const express = require('express');
const consultorioRouter = express.Router();
const consultorioController = require('../controllers/consultorioController');

consultorioRouter.get('/', consultorioController.getPacientes);
consultorioRouter.get('/:id', consultorioController.getPaciente);
consultorioRouter.post('/', consultorioController.createPaciente);
consultorioRouter.put('/:id', consultorioController.updatePaciente);
consultorioRouter.delete('/:id', consultorioController.deletePaciente);