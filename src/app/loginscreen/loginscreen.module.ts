import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginscreenRoutingModule } from './loginscreen-routing.module';
import { LoginboxComponent } from './loginbox/loginbox.component';

@NgModule({
  declarations: [LoginboxComponent],
  imports: [
    CommonModule,
    LoginscreenRoutingModule
  ],
  exports: [LoginboxComponent]
})
export class LoginscreenModule { }
