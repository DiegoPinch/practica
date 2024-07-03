import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    PrincipalComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
