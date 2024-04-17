import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppState } from '../core/state/app.state';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard {
  constructor(
    private readonly appState: AppState,
    private readonly router: Router) { }

  canActivate: CanActivateFn = (route, state) => {
    return this.appState.users.currentUser.$().pipe(
      map(user => {
        if(user){
          return true
        }
        this.router.navigate(['']);
        return false
      })
    );
  }
}
