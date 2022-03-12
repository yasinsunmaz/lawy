import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputInputComponent } from './output-input.component';

describe('OutputInputComponent', () => {
  let component: OutputInputComponent;
  let fixture: ComponentFixture<OutputInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
