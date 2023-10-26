import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPatineteComponent } from './anadir-patinete.component';

describe('AnadirPatineteComponent', () => {
  let component: AnadirPatineteComponent;
  let fixture: ComponentFixture<AnadirPatineteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirPatineteComponent]
    });
    fixture = TestBed.createComponent(AnadirPatineteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
