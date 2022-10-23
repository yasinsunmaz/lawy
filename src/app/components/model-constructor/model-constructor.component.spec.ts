import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConstructorComponent } from './model-constructor.component';

describe('ModelContructorComponent', () => {
  let component: ModelConstructorComponent;
  let fixture: ComponentFixture<ModelConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
