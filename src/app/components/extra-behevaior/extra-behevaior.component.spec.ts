import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraBehevaiorComponent } from './extra-behevaior.component';

describe('ExtraBehevaiorComponent', () => {
  let component: ExtraBehevaiorComponent;
  let fixture: ComponentFixture<ExtraBehevaiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraBehevaiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraBehevaiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
