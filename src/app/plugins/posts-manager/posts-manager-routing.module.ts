import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: 'edit/:id', component: PostEditorComponent },
  { path: 'new', component: PostEditorComponent },
  { path: '', pathMatch: 'full', component: PostsListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsManagerRoutingModule { }
