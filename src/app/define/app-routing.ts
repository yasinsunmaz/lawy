import { Routes } from "@angular/router";
import { AboutLawyComponent } from "../components/about-lawy/about-lawy.component";
import { AnimationsComponent } from "../components/animations/animations.component";
import { AttributeDirectiveComponent } from "../components/attribute-directive/attribute-directive.component";
import { BasicFilterPipeComponent } from "../components/basic-filter-pipe/basic-filter-pipe.component";
import { BootstrapComponent } from "../components/bootstrap/bootstrap.component";
import { CallComponentComponent } from "../components/call-component/call-component.component";
import { ComponentComponent } from "../components/component/component.component";
import { ConstructorComponent } from "../components/constructor/constructor.component";
import { ContactComponent } from "../components/contact/contact.component";
import { CustomDirectiveComponent } from "../components/custom-directive/custom-directive.component";
import { CustomPipeComponent } from "../components/custom-pipe/custom-pipe.component";
import { DirectivesComponent } from "../components/directives/directives.component";
import { EnumComponent } from "../components/enum/enum.component";
import { EventBindingComponent } from "../components/event-binding/event-binding.component";
import { ExtraComponent } from "../components/extra/extra.component";
import { FilterComponent } from "../components/filter/filter.component";
import { FirebaseComponent } from "../components/firebase/firebase.component";
import { IntefaceComponent } from "../components/inteface/inteface.component";
import { LazyloadImageComponent } from "../components/lazyload-image/lazyload-image.component";
import { LocalStorageComponent } from "../components/local-storage/local-storage.component";
import { MaterialComponent } from "../components/material/material.component";
import { ModelConstructorComponent } from "../components/model-constructor/model-constructor.component";
import { ModelOrientedSetvalueFunctionComponent } from "../components/model-oriented-setvalue-function/model-oriented-setvalue-function.component";
import { MultipleRedirectOneComponent } from "../components/multiple-redirect-one/multiple-redirect-one.component";
import { MultipleRedirectTwoComponent } from "../components/multiple-redirect-two/multiple-redirect-two.component";
import { MultipleRouterOneComponent } from "../components/multiple-router-one/multiple-router-one.component";
import { MultipleRouterOutletComponent } from "../components/multiple-router-outlet/multiple-router-outlet.component";
import { MultipleRouterTwoComponent } from "../components/multiple-router-two/multiple-router-two.component";
import { NgTemplateComponent } from "../components/ng-template/ng-template.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { NotificationComponent } from "../components/notification/notification.component";
import { OneDataBindingComponent } from "../components/one-data-binding/one-data-binding.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { PipesComponent } from "../components/pipes/pipes.component";
import { PropertyBindingComponent } from "../components/property-binding/property-binding.component";
import { QrCodeComponent } from "../components/qr-code/qr-code.component";
import { ReactiveFormsComponent } from "../components/reactive-forms/reactive-forms.component";
import { ResolveComponent } from "../components/resolve/resolve.component";
import { RouteNavigationComponent } from "../components/route-navigation/route-navigation.component";
import { RouterEventTrackingComponent } from "../components/router-event-tracking/router-event-tracking.component";
import { ServiceComponent } from "../components/service/service.component";
import { StringInterpolationComponent } from "../components/string-interpolation/string-interpolation.component";
import { StructuralDirectiveComponent } from "../components/structural-directive/structural-directive.component";
import { TemplateReferenceVariableComponent } from "../components/template-reference-variable/template-reference-variable.component";
import { TwoDataBindingComponent } from "../components/two-data-binding/two-data-binding.component";
import { ValidatorComponent } from "../components/validator/validator.component";
import { HomeComponent } from "../layout/home/home.component";
import { TodoResolver } from "../resolve/todo.resolver";
export const AppRoutes: Routes = [
  { path: 'new1', loadChildren: () => import('../modules/new1/new1.module').then(m => m.New1Module) },
  { path: 'test2', loadChildren: () => import('../modules/test2/test2.module').then(m => m.Test2Module) },
  //TODO: Route Navigation Kullanımı
  { path: '', component: HomeComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'material', component: MaterialComponent },
  //{ path: 'route-navigation', component: RouteNavigationComponent },
  //TODO: Multiple Çoklu İç İçe Router Kullanımı
  {
    path: 'route-navigation', component: RouteNavigationComponent, children: [
      { path: 'multiple-redirect-one', component: MultipleRedirectOneComponent },
      { path: 'multiple-redirect-two', component: MultipleRedirectTwoComponent }
    ]
  },
  //TODO: Multiple Route Outlet Kullanımı
  {
    path: 'multiple-router-outlet', component: MultipleRouterOutletComponent, children: [
      { path: 'multiple-router-one', component: MultipleRouterOneComponent, outlet: "multipleRouterOutlet" },
      { path: 'multiple-router-two', component: MultipleRouterTwoComponent, outlet: "multipleRouterOutlet" }
    ]
  },
  { path: 'router-event-tracking', component: RouterEventTrackingComponent },
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
  { path: 'ng-template', component: NgTemplateComponent },
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
  { path: 'extra', component: ExtraComponent },
  { path: 'about-lawy', component: AboutLawyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resolve', component: ResolveComponent, resolve:{todos:TodoResolver} },
  { path: 'call-component', component: CallComponentComponent },
  { path: 'model-constructor', component: ModelConstructorComponent },
  // // {path: 'users/:id',
  // //        component: UsersComponent,
  // //        canDeactivate: [CanDeactivateGuard]},
  // //TODO Yetkiye bağlı url izini verme
  // //{ path: 'users/:id, canActivate:[ExampleGuard], component:  ProductDetailComponent},
  // { path: 'reactive-forms', component: ReactiveFormsComponent,canActivate: [AuthGuard]  },
  // { path: 'login', component: LoginComponent  },
  // {
  //   path:"lazy",
  //   loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)
  // },
  //TODO: 404 Sayfası Kullanımı
  { path: '404-not-found', component: NotFoundComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];