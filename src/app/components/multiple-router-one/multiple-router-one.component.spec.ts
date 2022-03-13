import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouterOneComponent } from './multiple-router-one.component';

describe('MultipleRouterOneComponent', () => {
  let component: MultipleRouterOneComponent;
  let fixture: ComponentFixture<MultipleRouterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRouterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
