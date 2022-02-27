import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  user: IUser = { firstname: '', lastname: '', phone: '', email: '', gender:true };

  constructor(private userService: UserFirebaseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.addUser(form.value).
      then(() => form.reset());
  }
}
