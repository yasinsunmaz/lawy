import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadImageComponent } from './lazyload-image.component';

describe('LazyloadImageComponent', () => {
  let component: LazyloadImageComponent;
  let fixture: ComponentFixture<LazyloadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
