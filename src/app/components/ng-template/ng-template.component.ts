import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {
  //TODO: ng-template Kullanımı
  templateSelect = 'template1';

  count=10;
  constructor() { }

  ngOnInit(): void {
  }

}
