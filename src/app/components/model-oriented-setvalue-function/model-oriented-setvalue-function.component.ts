import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-oriented-setvalue-function',
  templateUrl: './model-oriented-setvalue-function.component.html',
  styleUrls: ['./model-oriented-setvalue-function.component.css']
})
export class ModelOrientedSetvalueFunctionComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm();
    //TODO: Model Odaklı SetValue Fonksiyon Kullanımı
    this.userForm.controls["name"].setValue("Yasin Sunmaz");
  }
  createUserForm() {
    this.userForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }
}
