import { Component, OnInit } from '@angular/core';
import { UserPipeModel } from 'src/app/entities/user-pipe';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  //TODO: Attribute Directive Kullanımı
  users = [
    new UserPipeModel('Yasin', 'Erkek', 26),
    new UserPipeModel('Tayfun', 'Erkek', 28),
    new UserPipeModel('Sümeyye', 'Kadın', 22),
    new UserPipeModel('Hakan', 'Erkek', 27),
    new UserPipeModel('Berrin', 'Belirtilmemiş', 51),
    new UserPipeModel('Elif', 'Kadın', 34),
  ]
  condition: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
