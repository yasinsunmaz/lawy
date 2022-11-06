import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/entities/user-model';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: Class Binding Kullanımı
  inputFirstName: string = "";
  model = new UserModel();

  getBtnClass() {
    return {
      'disabled': this.inputFirstName.length == 0,
      'btn-secondary': this.inputFirstName.length != 0,
      'btn-success': this.inputFirstName.length > 0
    }
  }

  getUserItems() {
    return this.model.userItems;
  }

  addUserItem(surname: string, email: string, address: string) {
    if (surname != "" && this.inputFirstName != "") {
      this.model.userItems.push({ name: this.inputFirstName, surname: surname, email: email, address: address });
    } else {
      alert("Ad ve soyad zorunludur!")
    }
  }
}
