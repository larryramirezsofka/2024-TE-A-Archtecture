import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserListBlockComponent } from '../../ui/blocks/user-list-block/user-list-block.component';
import { Observable } from 'rxjs';
import { IUserModel } from '../../core/models/user.mode';
import { UserListContainerFacade } from './user-list-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-list-container',
  standalone: true,
  imports: [UserListBlockComponent, AsyncPipe],
  templateUrl: './user-list-container.component.html',
})
export class UserListContainerComponent implements OnInit, OnDestroy{
  public users$: Observable<IUserModel[]>;

  constructor(
    private readonly facade: UserListContainerFacade
  ) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getUsers();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.users$ = this.facade.users$();
  }
}
