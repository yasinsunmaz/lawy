import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  //TODO: Event Binding Kullanımı
  name: string = "Yasin SUNMAZ";
  handleKeyup(event: any): void {
    this.name = event.target.value;
    console.log(event);
  }
  handleClear(): void {
    this.name = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
