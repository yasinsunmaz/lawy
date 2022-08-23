import { Component, OnInit } from '@angular/core';
import { CalenderService } from 'src/app/services/calender.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private calendarService: CalenderService) { }
  ngOnInit() {
    this.calendarService.getCalendar().subscribe(res => {
      console.log('res', res);
    });
  }
}
