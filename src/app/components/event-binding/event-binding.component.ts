import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/entities/user-model';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  //TODO: Event Binding Kullanımı
  name: string = "Yasin SUNMAZ";
  productName: string;
  handleKeyup(event: any): void {
    this.name = event.target.value;
    console.log(event);
  }
  handleClear(): void {
    this.name = "";
  }
  addProduct(product: any) {
    if (product != "") {
      this.productName = product;
    } else {
      this.productName = "Ürün adı girmelisiniz!";
    }
  }

  model = new UserModel();

  getUserItems() {
    return this.model.userItems;
  }

  addUserItem(name: string, surname: string, email: string, address: string) {
    if (name != "" && surname != "") {
      this.model.userItems.push({ name, surname, email, address });
    } else {
      alert("Ad ve soyad zorunludur!")
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
