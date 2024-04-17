import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrosService {
  extract(error: HttpErrorResponse): HttpErrorResponse {
    return {
      error
    } as HttpErrorResponse
  }
}
