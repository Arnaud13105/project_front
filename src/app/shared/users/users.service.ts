import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from 'src/app/interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'http://localhost:8080/api/user'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Users[]> {
    let API_URL = `${this.url}`;
    return this.http.get<Users[]>(API_URL)
      .pipe(
        map((res: any) => {
          return res || [];
        }),
        catchError(this.errorMgmt)
      );
  }

  getOne(id: number): Observable<Users> {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  add(u: Users): Observable<Users> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, u)
      .pipe(
        catchError(this.errorMgmt)
      );
  }
  
  update(id: number, u: Users): Observable<Users> {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, u)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  update2 = (id: number, data: Users): Observable<Users> => {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  delete(id: number): Observable<Users> {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  delete2 = (id: number): Observable<Users> => {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
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