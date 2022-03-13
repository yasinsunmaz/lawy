import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouterTwoComponent } from './multiple-router-two.component';

describe('MultipleRouterTwoComponent', () => {
  let component: MultipleRouterTwoComponent;
  let fixture: ComponentFixture<MultipleRouterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRouterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
