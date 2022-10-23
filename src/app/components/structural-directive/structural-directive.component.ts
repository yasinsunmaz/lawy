import { Component, OnInit } from '@angular/core';
import { UserPipeModel } from 'src/app/entities/user-pipe';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  //TODO: Structural Directive Kullanımı
  condition: boolean = true;
  ngIfStatus: boolean = true;

  userItem = [
    "Yasin", "Sunmaz", "yasinsunmaz.com"
  ];

  userItems = [
    { id: 1, name: "Yasin", surname: "Sunmaz" },
    { id: 2, name: "Mahmut", surname: "Kara" },
    { id: 3, name: "Murat", surname: "Konar" }
  ];

  users = [
    new UserPipeModel('Yasin', 'Erkek', 26),
    new UserPipeModel('Tayfun', 'Erkek', 28),
    new UserPipeModel('Sümeyye', 'Kadın', 22),
    new UserPipeModel('Hakan', 'Erkek', 27),
    new UserPipeModel('Berrin', 'Belirtilmemiş', 51),
    new UserPipeModel('Elif', 'Kadın', 34),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
