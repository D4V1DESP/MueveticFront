import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMantenimientoComponent } from './anadir-mantenimiento.component';

describe('AnadirMantenimientoComponent', () => {
  let component: AnadirMantenimientoComponent;
  let fixture: ComponentFixture<AnadirMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirMantenimientoComponent]
    });
    fixture = TestBed.createComponent(AnadirMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
