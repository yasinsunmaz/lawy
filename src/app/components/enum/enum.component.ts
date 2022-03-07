import { Component, OnInit } from '@angular/core';
import { EnumModel } from 'src/app/enums/enum';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent implements OnInit {
  firstName = EnumModel.firstName;
  lastName = EnumModel.lastName;
  website = EnumModel.website;
  constructor() { }

  ngOnInit(): void {
  }

}
