import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerApis } from '../core/server-apis';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.cookieService.get('digikala-token');
  
    const myRequest = req.clone({
      url:ServerApis.mainApi + req.url,
      headers: req.headers.append('Authorization', 'Bearer ' + token)
      // headers: req.headers.set(Authorization', 'Bearer ' + token)
    });
  
    return next.handle(myRequest);
  }
}


