import { Routes } from "@angular/router";
import { AboutLawyComponent } from "../components/about-lawy/about-lawy.component";
import { AnimationsComponent } from "../components/animations/animations.component";
import { AttributeDirectiveComponent } from "../components/attribute-directive/attribute-directive.component";
import { BasicFilterPipeComponent } from "../components/basic-filter-pipe/basic-filter-pipe.component";
import { ComponentComponent } from "../components/component/component.component";
import { ConstructorComponent } from "../components/constructor/constructor.component";
import { ContactComponent } from "../components/contact/contact.component";
import { CustomDirectiveComponent } from "../components/custom-directive/custom-directive.component";
import { CustomPipeComponent } from "../components/custom-pipe/custom-pipe.component";
import { DirectivesComponent } from "../components/directives/directives.component";
import { EnumComponent } from "../components/enum/enum.component";
import { EventBindingComponent } from "../components/event-binding/event-binding.component";
import { FilterComponent } from "../components/filter/filter.component";
import { FirebaseComponent } from "../components/firebase/firebase.component";
import { IntefaceComponent } from "../components/inteface/inteface.component";
import { LazyloadImageComponent } from "../components/lazyload-image/lazyload-image.component";
import { LocalStorageComponent } from "../components/local-storage/local-storage.component";
import { ModelOrientedSetvalueFunctionComponent } from "../components/model-oriented-setvalue-function/model-oriented-setvalue-function.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { NotificationComponent } from "../components/notification/notification.component";
import { OneDataBindingComponent } from "../components/one-data-binding/one-data-binding.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { PipesComponent } from "../components/pipes/pipes.component";
import { PropertyBindingComponent } from "../components/property-binding/property-binding.component";
import { QrCodeComponent } from "../components/qr-code/qr-code.component";
import { ReactiveFormsComponent } from "../components/reactive-forms/reactive-forms.component";
import { ServiceComponent } from "../components/service/service.component";
import { StringInterpolationComponent } from "../components/string-interpolation/string-interpolation.component";
import { StructuralDirectiveComponent } from "../components/structural-directive/structural-directive.component";
import { TemplateReferenceVariableComponent } from "../components/template-reference-variable/template-reference-variable.component";
import { TwoDataBindingComponent } from "../components/two-data-binding/two-data-binding.component";
import { ValidatorComponent } from "../components/validator/validator.component";
import { HomeComponent } from "../layout/home/home.component";
export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'one-data-binding', component: OneDataBindingComponent },
  { path: 'two-data-binding', component: TwoDataBindingComponent },
  { path: 'template-reference-variable', component: TemplateReferenceVariableComponent },
  { path: 'string-interpolation', component: StringInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'interface', component: IntefaceComponent },
  { path: 'model-oriented-setvalue-function', component: ModelOrientedSetvalueFunctionComponent },
  { path: 'enums', component: EnumComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'structural-directive', component: StructuralDirectiveComponent },
  { path: 'attribute-directive', component: AttributeDirectiveComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'basic-filter-pipe', component: BasicFilterPipeComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'lazyload-image', component: LazyloadImageComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'validator', component: ValidatorComponent },
  { path: 'local-storage', component: LocalStorageComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'about-lawy', component: AboutLawyComponent },
  { path: 'contact', component: ContactComponent },
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