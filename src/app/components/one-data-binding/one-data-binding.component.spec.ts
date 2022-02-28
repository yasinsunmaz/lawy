import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDataBindingComponent } from './one-data-binding.component';

describe('OneDataBindingComponent', () => {
  let component: OneDataBindingComponent;
  let fixture: ComponentFixture<OneDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
