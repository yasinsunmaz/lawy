import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/entities/user';
import { UserPipeModel } from 'src/app/entities/user-pipe';
import { UserJsonService } from 'src/app/services/user-json.service';

@Component({
  selector: 'app-basic-filter-pipe',
  templateUrl: './basic-filter-pipe.component.html',
  styleUrls: ['./basic-filter-pipe.component.css']
})
export class BasicFilterPipeComponent implements OnInit {
  //TODO: Basic Filter Pipe Kullanımı
  inputValue: any;
  userList: Users[] = [];
  filterText = "";
  //TODO Filter Pipe için
  selectedGender = 'h';
  users = [
    new UserPipeModel('Yasin', 'Erkek', 26),
    new UserPipeModel('Tayfun', 'Erkek', 28),
    new UserPipeModel('Sümeyye', 'Kadın', 22),
    new UserPipeModel('Hakan', 'Erkek', 27),
    new UserPipeModel('Berrin', 'Belirtilmemiş', 51),
    new UserPipeModel('Elif', 'Kadın', 34),
  ]

  constructor(private _usersService: UserJsonService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    try {
      this._usersService.getUserDataList().subscribe(response => {
        this.userList = response;
      });
    }
    catch (error) {
      console.error('Log error', error);
    }
  }
}
