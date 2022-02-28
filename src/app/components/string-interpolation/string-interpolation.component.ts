import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  //TODO: String Interpolation Kullanımı
  title = 'String Interpolation Kullanımı';
  //Matematiksel işlemler
  number1: number = 3;
  number2: number = 10;

  firstValue: number = 3; 
  secondValue: number = 10;
  methodCall(): number {
    return this.firstValue + this.secondValue;
  };

  name:string="Yasin";
  surname:string="SUNMAZ";

  users = {
    username : 'yasinsunmaz',
    password: 123
  };
  constructor() { }

  ngOnInit(): void {
  }

}
