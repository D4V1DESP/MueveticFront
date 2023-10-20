import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAdminComponent } from './anadir-admin.component';

describe('AnadirAdminComponent', () => {
  let component: AnadirAdminComponent;
  let fixture: ComponentFixture<AnadirAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirAdminComponent]
    });
    fixture = TestBed.createComponent(AnadirAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
