import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-router-event-tracking',
  templateUrl: './router-event-tracking.component.html',
  styleUrls: ['./router-event-tracking.component.css']
})
export class RouterEventTrackingComponent implements OnInit {
  //TODO: Router Event Takibi
  constructor(private router: Router) { }

  ngOnInit(): void {
    //TODO: Bütün Projede Event Takibi
    // this.router.events
    //   .subscribe(e => {
    //     if (e instanceof NavigationStart)
    //       alert(`RouterEventTracking Component Durumu : NavigationStart`);
    //     else if (e instanceof NavigationEnd)
    //       alert(`RouterEventTracking Component Durumu : NavigationEnd`);
    //     else if (e instanceof NavigationCancel)
    //       alert(`RouterEventTracking Component Durumu : NavigationCancel`);
    //     else if (e instanceof NavigationError)
    //       alert('RouterEventTracking Component Durumu : NavigationError');
    //     else if (e instanceof Scroll)
    //       alert('RouterEventTracking Component Durumu : Scroll');
    //   });
    //TODO: Detaylı Component Router Event Takibi
    // this.router.events
    //   .pipe(filter(event => event instanceof RoutesRecognized))
    //   .subscribe((event) => {
    //     console.log("Component Takibi: " + event);
    //   });
  }

}
