import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRedirectOneComponent } from './multiple-redirect-one.component';

describe('MultipleRedirectOneComponent', () => {
  let component: MultipleRedirectOneComponent;
  let fixture: ComponentFixture<MultipleRedirectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRedirectOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRedirectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
