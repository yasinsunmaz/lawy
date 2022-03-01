import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {
  //TODO: Template Reference Variable Kullanımı
  name: string = "Yasin SUNMAZ";
  handleGetValue(value: string): void {
    this.name = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
