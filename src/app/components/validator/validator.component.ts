import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/shared/enums/gender';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  userForm: FormGroup;
  genders = Object.keys(Gender);

  public genderEnums(): Array<string> {
    const keys = Object.keys(Gender);
    return keys.slice();
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createProduct();
    this.genders;
  }
  //TODO: Validator Kullanımı
  createProduct() {
    this.userForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      gender: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      ageMin: new FormControl(null, [Validators.required, Validators.min(10)]),
      ageMax: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  //TODO Form input alanlarını kontrol etmek için
  get name() { return this.userForm.get('name'); }
  get surname() { return this.userForm.get('surname'); }
  get gender() { return this.userForm.get('gender'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get ageMin() { return this.userForm.get('ageMin'); }
  get ageMax() { return this.userForm.get('ageMax'); }
  get password() { return this.userForm.get('password'); }
  get passwordConfirm() { return this.userForm.get('passwordConfirm'); }
}
