import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarManComponent } from './modificar-mantenimiento.component';

describe('ModificarManComponent', () => {
  let component: ModificarManComponent;
  let fixture: ComponentFixture<ModificarManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarManComponent]
    });
    fixture = TestBed.createComponent(ModificarManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
