import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-extra-behevaior',
  templateUrl: './extra-behevaior.component.html',
  styleUrls: ['./extra-behevaior.component.css']
})
export class ExtraBehevaiorComponent implements OnInit {
  counter: number=0;

  constructor(private counterService:CounterService) { 
    this.counterService.getCount().subscribe(count=>{
      this.counter=count;
    });
  }

  ngOnInit(): void {
  }

}
