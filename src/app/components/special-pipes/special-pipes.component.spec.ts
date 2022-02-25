import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPipesComponent } from './special-pipes.component';

describe('SpecialPipesComponent', () => {
  let component: SpecialPipesComponent;
  let fixture: ComponentFixture<SpecialPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
