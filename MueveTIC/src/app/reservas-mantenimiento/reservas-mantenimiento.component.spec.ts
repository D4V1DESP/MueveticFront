import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasMantenimientoComponent } from './reservas-mantenimiento.component';

describe('ReservasMantenimientoComponent', () => {
  let component: ReservasMantenimientoComponent;
  let fixture: ComponentFixture<ReservasMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasMantenimientoComponent]
    });
    fixture = TestBed.createComponent(ReservasMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
