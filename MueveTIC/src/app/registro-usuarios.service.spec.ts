import { TestBed } from '@angular/core/testing';

import { RegistroUsuariosService } from './registro-usuarios.service';

describe('RegistroUsuariosService', () => {
  let service: RegistroUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
