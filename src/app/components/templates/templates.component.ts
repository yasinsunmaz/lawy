import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  //templateUrl: './templates.component.html',
  //TODO: Template Kullanımı
  template: `
  <h1>Yasin SUNMAZ</h1>
  `,  
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
