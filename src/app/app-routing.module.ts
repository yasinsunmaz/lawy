import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { AppRoutes } from './define/app-routing';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
