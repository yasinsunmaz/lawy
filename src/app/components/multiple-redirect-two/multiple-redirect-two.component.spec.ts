import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRedirectTwoComponent } from './multiple-redirect-two.component';

describe('MultipleRedirectTwoComponent', () => {
  let component: MultipleRedirectTwoComponent;
  let fixture: ComponentFixture<MultipleRedirectTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRedirectTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRedirectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
