import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class PublicService extends BaseHttpService {
  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  override get(url: string, headers?: HttpHeaders): Observable<any> {
    const token = localStorage.getItem('publicAccessToken');
    if (token != undefined) {
      headers?.set('Authorization', 'Bearer${token}');
      return super.get(url, headers);
    }
    return super.get('https://yasinsunmaz.com');
  }
}
