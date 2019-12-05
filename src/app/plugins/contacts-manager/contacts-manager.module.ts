import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactsManagerRoutingModule } from './contacts-manager-routing.module';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';


@NgModule({
  declarations: [ContactsEditorComponent],
  imports: [
    CommonModule,
    ContactsManagerRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ContactsManagerModule { }
