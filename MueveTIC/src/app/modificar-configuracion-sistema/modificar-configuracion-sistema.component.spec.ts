import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarConfiguracionSistemaComponent } from './modificar-configuracion-sistema.component';

describe('ModificarConfiguracionSistemaComponent', () => {
  let component: ModificarConfiguracionSistemaComponent;
  let fixture: ComponentFixture<ModificarConfiguracionSistemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarConfiguracionSistemaComponent]
    });
    fixture = TestBed.createComponent(ModificarConfiguracionSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
