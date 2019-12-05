import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEditingComponent } from './text-editing/text-editing.component';


const routes: Routes = [
  { path: '**', component: TextEditingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextsManagerRoutingModule { }
