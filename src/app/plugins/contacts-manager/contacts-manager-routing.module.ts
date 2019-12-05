import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';


const routes: Routes = [
  { path: '', component: ContactsEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsManagerRoutingModule { }
