import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from 'src/app/interfaces/login';
import { Users } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url: string = `http://localhost:8080/api/user/showSome/auth`
  
  constructor(private http: HttpClient) { }

  login(login : Login) : any{

    let API_URL = `${this.url}/${login.email}/${login.password}`;
    
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || [];
        }),
        catchError(this.errorMgmt)
      );
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

