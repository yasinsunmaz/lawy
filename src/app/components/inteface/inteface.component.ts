import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-inteface',
  templateUrl: './inteface.component.html',
  styleUrls: ['./inteface.component.css']
})
export class IntefaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: Interface Kullanımı
  items: IUser[] = [
    { id: 1, firstname: "Yasin", lastname: "Sunmaz", gender: true, phone: "05050505055", email: "info@yasinsunmaz.com" },
    { id: 1, firstname: "Yasin", lastname: "Sunmaz", gender: true, phone: "05000000000", email: "info@yasinsunmaz.com" }
  ];
}
