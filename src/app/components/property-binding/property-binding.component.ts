import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  numberOne: number = 1;
  numberTwo: number = this.numberOne;
  title: string = "<h1>Yasin SUNMAZ</h1>";
  imgPath: string = "https://www.yasinsunmaz.com/ysadmin/ContentFiles/images/logo_14082018230718.jpg";
  isOnline: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
