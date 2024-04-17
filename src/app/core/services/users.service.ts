import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { Observable, map } from 'rxjs';
import { IUserModel } from '../models/user.mode';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToUsersMapper
  ) { }

  getUsers(): Observable<IUserModel[]> {
    const url = URL_RESOURCES.user;
    return this.httpService.get<IUserModel[]>(url)
      .pipe(
        map((result) => this.mapper.map(result))
      );
  }
}
