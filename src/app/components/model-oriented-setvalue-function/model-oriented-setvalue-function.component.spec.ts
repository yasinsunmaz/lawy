import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelOrientedSetvalueFunctionComponent } from './model-oriented-setvalue-function.component';

describe('ModelOrientedSetvalueFunctionComponent', () => {
  let component: ModelOrientedSetvalueFunctionComponent;
  let fixture: ComponentFixture<ModelOrientedSetvalueFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelOrientedSetvalueFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelOrientedSetvalueFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
