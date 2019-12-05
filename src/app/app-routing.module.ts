import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () =>
      import('./loginscreen/loginscreen.module')
        .then((mod) => mod.LoginscreenModule),
  },
  {
    path: '', loadChildren: () =>
      import('./core/core.module')
        .then((mod) => mod.CoreModule)
  },
  {
    path: '**', redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
