import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPaciente } from '../models/paciente.model';
import { mat_pacientes } from '../API/mock';

//  mat_pacientes = require('../API/mock');

export class ApiServiceService {
    constructor() {

    }

    public getPacientes(): Observable<IPaciente[]> {
        return of(mat_pacientes);
    }

}
