import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userSignUp } from './models/userSignUp';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser } from './models/currentuUser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  // private currentUser: BehaviorSubject<CurrentUser> = new BehaviorSubject<CurrentUser>('null');

  
  constructor(  private http: HttpClient) { }

signUpUser(userData:userSignUp):Observable<any>{
  return this.http.post<any>('account/register',userData );
}
}