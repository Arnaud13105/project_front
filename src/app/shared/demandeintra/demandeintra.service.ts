import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { Demandeintra } from 'src/app/interfaces/demandeintra';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandeintraService {

  url: string ='http://localhost:8080/api/demandeintra';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Demandeintra[]>{
    let API_URL = `${this.url}`;
    return this.http.get<Array<Demandeintra>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || [];
      }),
      catchError(this.errorMgmt)
    );
  }

   getOne(id: number): Observable<Demandeintra> {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  add(dIntra: Demandeintra): Observable<Demandeintra> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, dIntra)
    .pipe(
      catchError(this.errorMgmt)
    );
  }


update(id: number, dIntra: Demandeintra): Observable<Demandeintra>  {
  let API_URL = `${this.url}/${id}`;
  return this.http.put(API_URL, dIntra)
    .pipe(
      catchError(this.errorMgmt)
    );
}


 update2 = (id: number, data: Demandeintra): Observable<Demandeintra> => {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  
  delete(id: number): Observable<Demandeintra> {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  delete2 = (id: number): Observable<Demandeintra> => {
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
