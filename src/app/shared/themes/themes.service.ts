import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Formation } from 'src/app/interfaces/formation';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  url: string = 'http://localhost:8080/api/formations';

  constructor(private http: HttpClient) { }
 
  getAll(): Observable<Formation[]>{
    let API_URL = `${this.url}`;
    return this.http.get<Array<Formation>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || [];
      }),
      catchError(this.errorMgmt)
    );
  }

  getOne(id: number): Observable<Formation>{
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
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
