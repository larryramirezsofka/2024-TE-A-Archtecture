import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUserModel } from "../models/user.mode";
import { StateFactory } from "./factory.state";

@Injectable({
  providedIn: 'root'
})
export class UsersState {
  private users$: BehaviorSubject<IUserModel[]> = new BehaviorSubject(null);
  private currentUser$: BehaviorSubject<IUserModel> = new BehaviorSubject(null);

  constructor(private readonly factory: StateFactory) { }

  store() {
    return {
      users: this.factory.state(this.users$),
      currentUser: this.factory.state(this.currentUser$)
    }
  }
}