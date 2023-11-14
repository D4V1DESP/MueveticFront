import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaClienteComponent } from './reserva-cliente.component';

describe('ReservaClienteComponent', () => {
  let component: ReservaClienteComponent;
  let fixture: ComponentFixture<ReservaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaClienteComponent]
    });
    fixture = TestBed.createComponent(ReservaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
