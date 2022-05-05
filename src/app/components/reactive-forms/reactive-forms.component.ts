import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Gender } from 'src/app/shared/enums/gender';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  userForm: FormGroup;
  userParam: any = [];
  result: any;
  status: any;
  genders = Object.keys(Gender);

  //TODO: Enum for
  public genderEnums(): Array<string> {
    const keys = Object.keys(Gender);
    return keys.slice();
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private _notifications: NotificationService) { }

  ngOnInit(): void {
    this.createTopicForm();
    this.genders;
    //TODO: Model setValue Odaklı Form
    this.userForm.controls["name"].setValue("Yasin");
  }
  //TODO: Form alanlarını validasyon işlemlerini tanımlama
  createTopicForm() {
    this.userForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      gender: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  onCreateUser() {
    if (this.userForm.valid) {
      this.userParam = Object.assign({}, this.userForm.value);
      // console.log(this.userParam);
      localStorage.setItem("userData", JSON.stringify(this.userParam))
      this.status = true;
      if (this.status === true) {
        this._notifications.onSuccess('Kullanıcı eklendi');
      } else {
        this._notifications.onError('Bir hata oluştu!');
      }
      // TODO: Form gönderildikten sonra temizleme
      this.userForm.reset();
    } else {
      this._notifications.onError('Bir hata oluştu!');
    }
  }

  //TODO Form input alanlarını kontrol etmek için
  get name() { return this.userForm.get('name'); }
  get surname() { return this.userForm.get('surname'); }
  get gender() { return this.userForm.get('gender'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
  get password() { return this.userForm.get('password'); }
  get passwordConfirm() { return this.userForm.get('passwordConfirm'); }

}
