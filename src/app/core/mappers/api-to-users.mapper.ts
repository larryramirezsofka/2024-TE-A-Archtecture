import { Injectable } from "@angular/core";
import { IUserModel } from "../models/user.mode";

@Injectable({
  providedIn: 'root'
})
export class ApiToUsersMapper {
  map(payload: any[]): IUserModel[] {
    return payload.map((item) => (
      {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        email: item.email,
        password: item.password,
        avatar: item.avatar
      }
    ))
  }
}