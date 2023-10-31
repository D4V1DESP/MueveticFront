import { TestBed } from '@angular/core/testing';

import { AnadirUsuarioService } from './anadir-usuario.service';

describe('AnadirUsuarioService', () => {
  let service: AnadirUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnadirUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
