import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsManagerRoutingModule } from './rooms-manager-routing.module';
import { RoomsEditingComponent } from './rooms-editing/rooms-editing.component';


@NgModule({
  declarations: [RoomsEditingComponent],
  imports: [
    CommonModule,
    RoomsManagerRoutingModule
  ]
})
export class RoomsManagerModule { }
