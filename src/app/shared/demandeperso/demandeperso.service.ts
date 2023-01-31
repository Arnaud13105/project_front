import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Demandeperso } from 'src/app/interfaces/demandeperso';


@Injectable({
  providedIn: 'root'
})
export class DemandepersoService {

  url: string = 'http://localhost:8080/api/demandeperso';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Demandeperso[]> {
    let API_URL = `${this.url}`;
    return this.http.get<Demandeperso[]>(API_URL)
      .pipe(
        map((res: any) => {
          return res || [];
        }),
        catchError(this.errorMgmt)
      );
  }

  getOne(id: number): Observable<Demandeperso>  {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
    .pipe(
      map((res:any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  add(d: Demandeperso): Observable<Demandeperso> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, d)
      .pipe(
        catchError(this.errorMgmt)
      );
  }
  update(id: number, d: Demandeperso): Observable<Demandeperso>  {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, d)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  delete(id: number): Observable<Demandeperso>  {
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


