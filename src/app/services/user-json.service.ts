import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../entities/user';
import * as Constant from '../json-api/json-api';
@Injectable({
  providedIn: 'root'
})
export class UserJsonService {

  public users: any = [];
  path = Constant.JsonData;
  constructor(private http: HttpClient) { }

  getUserDataList(): Observable<Users[]> {
    return this.http.get<Users[]>(this.path.userUrl);
  }
}
