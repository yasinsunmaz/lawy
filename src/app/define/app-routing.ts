import { Routes } from "@angular/router";
import { EventBindingComponent } from "../components/event-binding/event-binding.component";
import { FirebaseComponent } from "../components/firebase/firebase.component";
import { IntefaceComponent } from "../components/inteface/inteface.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { OneDataBindingComponent } from "../components/one-data-binding/one-data-binding.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { PropertyBindingComponent } from "../components/property-binding/property-binding.component";
import { StringInterpolationComponent } from "../components/string-interpolation/string-interpolation.component";
import { TemplateReferenceVariableComponent } from "../components/template-reference-variable/template-reference-variable.component";
import { TwoDataBindingComponent } from "../components/two-data-binding/two-data-binding.component";
import { HomeComponent } from "../layout/home/home.component";
export const AppRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'firebase', component: FirebaseComponent },
    { path: 'one-data-binding', component: OneDataBindingComponent },
    { path: 'two-data-binding', component: TwoDataBindingComponent },
    { path: 'template-reference-variable', component: TemplateReferenceVariableComponent },
    { path: 'string-interpolation', component: StringInterpolationComponent },
    { path: 'property-binding', component: PropertyBindingComponent },
    { path: 'event-binding', component: EventBindingComponent },
    { path: 'interface', component: IntefaceComponent },
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
    //TODO: 404 Sayfası Kullanımı
    { path: '404-not-found', component: NotFoundComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }
  ];