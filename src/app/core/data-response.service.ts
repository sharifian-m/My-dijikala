import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IResponseApi } from './models/IResponse-api';
import { map } from 'rxjs/operators';
import { ServerApis } from './server-apis';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {

  constructor(
    private http: HttpClient,
    private router: Router,
  
  ) {
}

/* post */

post(url: string, params: any = ''): Observable<IResponseApi<any>> {
  return this.http.post<IResponseApi<any>>(url,  { params: params })
    .pipe(
      map(response => {
        return response;
      })
    );
}

/* get */

get(url: string, params: any = ''): Observable<IResponseApi<any>> {
  return this.http.get<IResponseApi<any>>(url, { params: params })
    .pipe(
      map(response => {
        return response;
      })
    );
}

/* getCurrentDateTime */
getCurrentDateTime(): Observable<any> {
  return this.http.get<any>(ServerApis.getCurrentDateTime)
    .pipe(
    
      map(response => {
        return response;
      })
    );
}

}
