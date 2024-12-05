import { TestBed } from '@angular/core/testing';

import { SolicitudFormularioService } from './solicitud-formulario.service';

describe('SolicitudFormularioService', () => {
  let service: SolicitudFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
