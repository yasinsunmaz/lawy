import { Routes } from "@angular/router";
import { HomeComponent } from "../layout/home/home.component";
export const AppRoutes: Routes =[
    { path: '', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'users', component: UsersComponent },
    // //TODO Url parametre verme
    // { path: 'users/:id', component: UsersComponent },
    // // {path: 'users/:id',
    // //        component: UsersComponent,
    // //        canDeactivate: [CanDeactivateGuard]},
    // //TODO Yetkiye bağlı url izini verme
    // //{ path: 'users/:id, canActivate:[ExampleGuard], component:  ProductDetailComponent},
    // { path: 'basicusage', component: BasicusageComponent },
    // { path: 'angularpipes', component: AngularpipesComponent },
    // { path: 'angular-app-one', component: AngularAppOneComponent },
    // { path: 'angular-app-two', component: AngularAppTwoComponent },
    // { path: 'angular-notification', component: AngularNotificationComponent },
    // { path: 'qr-read', component: QrReadComponent },
    // { path: 'local-storage', component: LocalStorageComponent },
    // { path: 'reactive-forms', component: ReactiveFormsComponent,canActivate: [AuthGuard]  },
    // { path: 'login', component: LoginComponent  },
    // //TODO Multiple çoklu iç içe router kullanımı
    // { path: 'teams', component: TeamsComponent, children:[
    //   {path: 'team-software', component:TeamSoftwareComponent},
    //   {path: 'team-framework', component:TeamFrameworkComponent}
    // ] },
    // {
    //   path:"lazy",
    //   loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)
    // },
    //{ path: '404', component: NotfoundComponent },
    //{ path: '**', redirectTo: '/404' }
  ];