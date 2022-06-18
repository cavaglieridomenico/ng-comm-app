import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYachtComponent } from './edit-yacht.component';

describe('EditYachtComponent', () => {
  let component: EditYachtComponent;
  let fixture: ComponentFixture<EditYachtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditYachtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
