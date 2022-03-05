import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFilterPipeComponent } from './basic-filter-pipe.component';

describe('BasicFilterPipeComponent', () => {
  let component: BasicFilterPipeComponent;
  let fixture: ComponentFixture<BasicFilterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFilterPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
