import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarseBajaComponent } from './darse-baja.component';

describe('DarseBajaComponent', () => {
  let component: DarseBajaComponent;
  let fixture: ComponentFixture<DarseBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarseBajaComponent]
    });
    fixture = TestBed.createComponent(DarseBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
