import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirCochesComponent } from './anadir-coches.component';

describe('AnadirCochesComponent', () => {
  let component: AnadirCochesComponent;
  let fixture: ComponentFixture<AnadirCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirCochesComponent]
    });
    fixture = TestBed.createComponent(AnadirCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
