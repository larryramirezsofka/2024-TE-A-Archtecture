import { Observable, Subscription, tap } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { UsersService } from "../../core/services/users.service";
import { IUserModel } from "../../core/models/user.mode";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly usersService: UsersService
  ) { }

  //#region observables
  users$(): Observable<IUserModel[]> {
    return this.appState.users.users.$();
  }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  getUsers(): void {
    this.subscriptions.add(
      this.usersService.getUsers().pipe(
        tap(this.appState.users.users.set.bind(this))
      ).subscribe()
    );
  }
  //#endregion
}