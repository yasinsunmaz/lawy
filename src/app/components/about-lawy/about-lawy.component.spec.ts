import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLawyComponent } from './about-lawy.component';

describe('AboutLawyComponent', () => {
  let component: AboutLawyComponent;
  let fixture: ComponentFixture<AboutLawyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLawyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
