import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1.component';

const routes: Routes = [{ path: '', component: New1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class New1RoutingModule { }
