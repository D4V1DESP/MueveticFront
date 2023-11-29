import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMantenimientoComponent } from './vista-mantenimiento.component';

describe('VistaMantenimientoComponent', () => {
  let component: VistaMantenimientoComponent;
  let fixture: ComponentFixture<VistaMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMantenimientoComponent]
    });
    fixture = TestBed.createComponent(VistaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
