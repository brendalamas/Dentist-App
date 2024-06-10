import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeskPacientesComponent } from './desk-pacientes.component';
import { ApiServiceService } from '../../../services/api.service.service'; 
import { IPaciente } from '../../../models/paciente.model';

describe('DeskPacientesComponent', () => {
  let component: DeskPacientesComponent;
  let fixture: ComponentFixture<DeskPacientesComponent>;
  let service: ApiServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeskPacientesComponent],
      imports: [ TestBed ],
      providers: [{ provide: ApiServiceService, useClass: ApiServiceService }]
    }).compileComponents();

    fixture = TestBed.createComponent(DeskPacientesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ApiServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pacientes on init', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.pacientesList.length).toBe(2);
    expect(component.pacientesList).toEqual(mat_pacientes.pacientes);
  });
});