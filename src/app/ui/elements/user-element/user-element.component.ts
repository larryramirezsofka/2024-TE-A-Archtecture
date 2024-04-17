import { Component, Input } from '@angular/core';
import { IUserModel } from '../../../core/models/user.mode';

@Component({
  selector: 'app-user-element',
  standalone: true,
  imports: [],
  templateUrl: './user-element.component.html',
  styleUrl: './user-element.component.css'
})
export class UserElementComponent {
  @Input() user: IUserModel;
}
