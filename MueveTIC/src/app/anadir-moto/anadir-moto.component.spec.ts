import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMotoComponent } from './anadir-moto.component';

describe('AnadirMotoComponent', () => {
  let component: AnadirMotoComponent;
  let fixture: ComponentFixture<AnadirMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirMotoComponent]
    });
    fixture = TestBed.createComponent(AnadirMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
