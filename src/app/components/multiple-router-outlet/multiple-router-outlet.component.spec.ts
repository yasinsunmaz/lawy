import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouterOutletComponent } from './multiple-router-outlet.component';

describe('MultipleRouterOutletComponent', () => {
  let component: MultipleRouterOutletComponent;
  let fixture: ComponentFixture<MultipleRouterOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRouterOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
