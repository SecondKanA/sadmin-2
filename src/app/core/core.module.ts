import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [LayoutComponent],
})
export class CoreModule {
  constructor() {
  }
}
