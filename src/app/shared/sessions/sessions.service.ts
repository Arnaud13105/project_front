import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Sessions } from 'src/app/interfaces/sessions';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  url: string ='http://localhost:8080/api/sessions';

  constructor(private htpp: HttpClient) { }


  getAll(): Observable<Sessions[]>{
    let API_URL = `${this.url}`;
    return this.htpp.get<Array<Sessions>>(API_URL)
    .pipe(
      map((res:any) => {
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
