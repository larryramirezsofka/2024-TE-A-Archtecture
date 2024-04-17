import { Component, Input } from '@angular/core';
import { UserElementComponent } from '../../elements/user-element/user-element.component';
import { IUserModel } from '../../../core/models/user.mode';

@Component({
  selector: 'app-user-list-block',
  standalone: true,
  imports: [UserElementComponent],
  templateUrl: './user-list-block.component.html',
  styleUrl: './user-list-block.component.css'
})
export class UserListBlockComponent {
  @Input() users: IUserModel[];
}
