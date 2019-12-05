import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsEditingComponent } from './rooms-editing/rooms-editing.component';


const routes: Routes = [
  { path: '**', component: RoomsEditingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsManagerRoutingModule { }
