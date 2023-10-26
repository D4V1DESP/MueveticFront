import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMantenimientoComponent } from './modificar-mantenimiento.component';

describe('ModificarMantenimientoComponent', () => {
  let component: ModificarMantenimientoComponent;
  let fixture: ComponentFixture<ModificarMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarMantenimientoComponent]
    });
    fixture = TestBed.createComponent(ModificarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
