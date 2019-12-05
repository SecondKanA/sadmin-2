import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { PostsManagerService } from './posts-manager.service';

import { PostsManagerRoutingModule } from './posts-manager-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostEditorComponent } from './post-editor/post-editor.component';


@NgModule({
  declarations: [PostsListComponent, PostEditorComponent],
  imports: [
    CommonModule,
    PostsManagerRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot({
      theme: 'snow',
      modules: {
        toolbar: [
          [
            { 'header': [ false, 2, 3 ] },
          ],
          ['bold', 'italic', 'underline', 'strike', { 'align': [] }],
          ['link', 'image', 'video', 'blockquote'],
          [{ 'script': 'sub' }, { 'script': 'super'}],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['clean'],
        ],
      }
    }),
  ],
  providers: [ PostsManagerService ],
})
export class PostsManagerModule { }
