import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosClienteComponent } from './usuarios-cliente.component';

describe('UsuariosClienteComponent', () => {
  let component: UsuariosClienteComponent;
  let fixture: ComponentFixture<UsuariosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosClienteComponent]
    });
    fixture = TestBed.createComponent(UsuariosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
