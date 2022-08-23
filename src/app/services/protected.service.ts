import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService extends BaseHttpService {

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  override get(url: string, headers?: HttpHeaders): Observable<any> {
    const token = localStorage.getItem('protectedAccessToken');
    if (token != undefined) {
      headers?.set('Authorization', 'Bearer${token}');
      return this.get(url, headers);
    }
    return of('Http Request Error');
  }
}
