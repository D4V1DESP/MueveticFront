import { TestBed } from '@angular/core/testing';

import { AltaVehiculoService } from './vehiculo.service';

describe('AltaVehiculoService', () => {
  let service: AltaVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
