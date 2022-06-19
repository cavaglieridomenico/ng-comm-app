import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtFormComponent } from './yacht-form.component';

describe('YachtFormComponent', () => {
  let component: YachtFormComponent;
  let fixture: ComponentFixture<YachtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
