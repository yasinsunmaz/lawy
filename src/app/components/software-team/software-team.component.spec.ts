import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTeamComponent } from './software-team.component';

describe('SoftwareTeamComponent', () => {
  let component: SoftwareTeamComponent;
  let fixture: ComponentFixture<SoftwareTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
