import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, of, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  get(url: string, headers?: HttpHeaders) {
    console.log('http get request')
    return this.http.get(url, {
      headers: headers
    }).pipe(
      tap((response: any) => {
        if (response.status == 404) {
          this.router.navigateByUrl('404');
        } else if (response.status == 400) {// bad request
          // bad request toastr tetikle.rxjs behavior ile ona subscribe olan direk sayfada toastr çıkartır.
        }
        return response
      }),
      map((response: any) => {
        // map operatörü ile ilgili response müdahale edebiliriz.
        response.contextId = '5';
        if (response.status == 200) {
          // farklı bir dto objesi yapı döndürebiliriz.
          const data = {
            response,
            success: true,
          }
          return data;
        }
        return response;
      }),
      catchError(err => {
        console.error(err);
        const errObj = { success: false, errorMessage: err.message };
        return of(errObj);
      }
      ),
      retry(2),
      delay(2000)
    );
  }

  post(url: string, param: any, headers?: HttpHeaders) {
    return this.http.post(param, headers);
  }

  put(url: string, id: string, param: any, headers?: HttpHeaders) {
    return this.http.put('${url}/${id}', param, { headers: headers });
  }

  patch(url: string, id: string, param: any, headers?: HttpHeaders) {
  }

  delete(url: string, id: string, headers?: HttpHeaders) {
  }
}
