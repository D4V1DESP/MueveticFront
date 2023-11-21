import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionComponent } from './recuperacion.component';

describe('RecuperacionComponent', () => {
  let component: RecuperacionComponent;
  let fixture: ComponentFixture<RecuperacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacionComponent]
    });
    fixture = TestBed.createComponent(RecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
