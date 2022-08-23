import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { New1RoutingModule } from './new1-routing.module';
import { New1Component } from './new1.component';


@NgModule({
  declarations: [
    New1Component
  ],
  imports: [
    CommonModule,
    New1RoutingModule
  ],
  exports:[
    New1Component//TODO Modul export edip başka yerden çağırılması sağlanır.
  ]
})
export class New1Module { }
