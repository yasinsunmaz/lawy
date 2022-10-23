import { Component, OnInit } from '@angular/core';
import { UserItem } from 'src/app/entities/user-item-model';
import { UserModel } from 'src/app/entities/user-model';

@Component({
  selector: 'app-model-contructor',
  templateUrl: './model-constructor.component.html',
  styleUrls: ['./model-constructor.component.css']
})
export class ModelConstructorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: Model-Constructor Kullanımı
  items: UserItem[] = [
    new UserItem("Yasin", "Sunmaz", "info@yasinsunmaz.com", "AYDIN"),
    new UserItem("Yasin", "Sunmaz", "info@yasinsunmaz.com", "ANKARA"),
    new UserItem("Yasin", "Sunmaz", "info@yasinsunmaz.com", "İZMİR"),
    new UserItem("Yasin", "Sunmaz", "info@yasinsunmaz.com", "MUĞLA"),
  ];

  //Model Construcor Farklı Kullanımı
  model = new UserModel();

  getUserItems() {
    return this.model.userItems;
  }

}
