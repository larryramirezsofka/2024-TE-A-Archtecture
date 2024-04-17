import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './private.guard';
import { AdminContainerComponent } from '../containers/admin-container/admin-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    canActivate: [PrivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
