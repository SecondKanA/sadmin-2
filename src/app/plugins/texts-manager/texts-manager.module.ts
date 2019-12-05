import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TextsManagerRoutingModule } from './texts-manager-routing.module';
import { TextEditingComponent } from './text-editing/text-editing.component';


@NgModule({
  declarations: [TextEditingComponent],
  imports: [
    CommonModule,
    TextsManagerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class TextsManagerModule { }
