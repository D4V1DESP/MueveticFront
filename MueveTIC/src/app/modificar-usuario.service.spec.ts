import { TestBed } from '@angular/core/testing';

import { ModificarUsuarioService } from './modificar-usuario.service';

describe('ModificarUsuarioService', () => {
  let service: ModificarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
