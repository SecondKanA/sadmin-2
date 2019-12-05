import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginboxComponent } from './loginbox/loginbox.component';

const routes: Routes = [
  { path: '', component: LoginboxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginscreenRoutingModule { }
