import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterEventTrackingComponent } from './router-event-tracking.component';

describe('RouterEventTrackingComponent', () => {
  let component: RouterEventTrackingComponent;
  let fixture: ComponentFixture<RouterEventTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterEventTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterEventTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
