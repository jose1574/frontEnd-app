import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { UserDto } from '../dtos/user.dto';

const url: string = 'http://localhost:3000/auth/login'

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  signIn(user: UserDto | any): Observable<any> {
    return this.http.post( url, user);
  }
}
