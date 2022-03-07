import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/entities/user';
import { UserPipeModel } from 'src/app/entities/user-pipe';
import { UserJsonService } from 'src/app/services/user-json.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  userList: Users[] = [];

  //TODO: Component içinde modele veri ekleme
  users = [
    new UserPipeModel('Yasin', 'Erkek', 26),
    new UserPipeModel('Tayfun', 'Erkek', 28),
    new UserPipeModel('Sümeyye', 'Kadın', 22),
    new UserPipeModel('Hakan', 'Erkek', 27),
    new UserPipeModel('Sinem', 'Belirtilmemiş', 51),
    new UserPipeModel('Elif', 'Kadın', 34),
  ]
  
  //TODO: Filter kullanımı
  getUserModelData() {
    return this.users.filter(p => p.gender == 'Erkek');
  }

  constructor(private _usersService: UserJsonService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //TODO: Filter kullanımı
  getAllUsers() {
    try {
      this._usersService.getUserDataList().subscribe(response => {
        this.userList = response.filter(p => p.id > 5);
      });
    }
    catch (error) {
      console.error('Log error', error);
    }
  }

}
