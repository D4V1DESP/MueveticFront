import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirManComponent } from './anadir-mantenimiento.component';

describe('AnadirMantenimientoComponent', () => {
  let component: AnadirManComponent;
  let fixture: ComponentFixture<AnadirManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirManComponent]
    });
    fixture = TestBed.createComponent(AnadirManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
