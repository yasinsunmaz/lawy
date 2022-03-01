import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Users } from 'src/app/entities/user-constructor';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {
  //TODO: Constructor Kullanımı 2. Yöntem
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.userInfo.name = "Yasin";
    this.userInfo.surname = "SUNMAZ";
    this.userInfo.email = "contact@yasinsunmaz.com";
    this.userInfo.address = "Aydın, TÜRKİYE";
  }

  ngOnInit(): void {
  }
  //TODO: Constructor Kullanımı
  userInfo: Users = new Users("", "", "", "");
  onClick() {
    if (this.userInfo.name != "") {
      alert(this.userInfo.name + "\n" + this.userInfo.surname + "\n" + this.userInfo.email + "\n" + this.userInfo.address);
    } else {
      alert("Adı boş geçilemez!")
    }
  }
}