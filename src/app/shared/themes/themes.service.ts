import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Theme } from 'src/app/interfaces/themes';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  url: string = 'http://localhost:8080/api/formations';

  constructor(private http: HttpClient) { }
 
  getAll(): Observable<Theme[]>{
    let API_URL = `${this.url}`;
    return this.http.get<Array<Theme>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || [];
      }),
      catchError(this.errorMgmt)
    );
  }

  getTheme(theme: string): Observable<Theme>{
    let API_URL = `${this.url}/${theme}`;
    return this.http.get(API_URL)
    .pipe(
      map((res: any) => {
        return res || {};
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
