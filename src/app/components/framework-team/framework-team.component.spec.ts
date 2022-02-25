import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTeamComponent } from './framework-team.component';

describe('FrameworkTeamComponent', () => {
  let component: FrameworkTeamComponent;
  let fixture: ComponentFixture<FrameworkTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
