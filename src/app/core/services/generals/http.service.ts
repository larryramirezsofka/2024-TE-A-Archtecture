import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrosService } from './erros.service';
import { StorageService } from './storage.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrosService,
    private readonly storageService: StorageService
  ) { }

  get token(): string {
    return this.storageService.get<string>('TOKEN');
  }

  get headers(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${this.token}`);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: this.headers
    })
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  post<T>(url: string, body: string): Observable<T> {
    return this.http.post<T>(url, body, {
      headers: this.headers
    })
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  put<T>(url: string, body: string): Observable<T> {
    return this.http.put<T>(url, body, {
      headers: this.headers
    })
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, {
      headers: this.headers
    })
    .pipe(
      catchError((error) => this.handleError(error))
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => this.errorService.extract(error));
  }
}
