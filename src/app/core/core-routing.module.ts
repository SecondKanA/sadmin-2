import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, Routes, Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import * as camelcase from 'camelcase';

import { plugins, defaultPluginPath } from '../config';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: defaultPluginPath,
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../loginscreen/loginscreen.module')
            .then(mod => mod.LoginscreenModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('../plugins/posts-manager/posts-manager.module')
            .then(mod => mod.PostsManagerModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../plugins/contacts-manager/contacts-manager.module')
            .then(mod => mod.ContactsManagerModule),
      },
      {
        path: 'texts',
        loadChildren: () =>
          import('../plugins/texts-manager/texts-manager.module')
            .then(mod => mod.TextsManagerModule),
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('../plugins/rooms-manager/rooms-manager.module')
            .then(mod => mod.RoomsManagerModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
