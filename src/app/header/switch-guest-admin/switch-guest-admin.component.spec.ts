import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchGuestAdminComponent } from './switch-guest-admin.component';

describe('SwitchGuestAdminComponent', () => {
  let component: SwitchGuestAdminComponent;
  let fixture: ComponentFixture<SwitchGuestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchGuestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchGuestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
