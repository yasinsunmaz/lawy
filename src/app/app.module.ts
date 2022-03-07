import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QRCodeModule } from 'angular2-qrcode';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, ButtonsModule, InputsModule, CollapseModule, ModalModule, TooltipModule, PopoverModule
  , DropdownModule } from 'angular-bootstrap-md';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Observable } from 'rxjs';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LazyloadImageComponent } from './components/lazyload-image/lazyload-image.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SoftwareTeamComponent } from './components/software-team/software-team.component';
import { FrameworkTeamComponent } from './components/framework-team/framework-team.component';
import { SupportTeamComponent } from './components/support-team/support-team.component';
import { WebSocketComponent } from './components/web-socket/web-socket.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SpecialPipesComponent } from './components/special-pipes/special-pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { JwtComponent } from './components/jwt/jwt.component';
import { IdentityComponent } from './components/identity/identity.component';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { FilterComponent } from './components/filter/filter.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { ModuleComponent } from './components/module/module.component';
import { RouteNavigationComponent } from './components/route-navigation/route-navigation.component';
//TODO Firebase
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { OneDataBindingComponent } from './components/one-data-binding/one-data-binding.component';
import { TwoDataBindingComponent } from './components/two-data-binding/two-data-binding.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { IntefaceComponent } from './components/inteface/inteface.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { AboutLawyComponent } from './components/about-lawy/about-lawy.component';
import { ContactComponent } from './components/contact/contact.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { BasicPipe } from './pipes/basic.pipe';
import { BasicFilterPipeComponent } from './components/basic-filter-pipe/basic-filter-pipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { LetterAbbreviationPipe } from './pipes/letter-abbreviation.pipe';
import { EnumComponent } from './components/enum/enum.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    PageNotFoundComponent,
    LazyloadImageComponent,
    QrCodeComponent,
    ReactiveFormsComponent,
    TeamsComponent,
    SoftwareTeamComponent,
    FrameworkTeamComponent,
    SupportTeamComponent,
    WebSocketComponent,
    PipesComponent,
    SpecialPipesComponent,
    DirectivesComponent,
    LocalStorageComponent,
    RegisterComponent,
    LoginComponent,
    ObservableComponent,
    FirebaseComponent,
    JwtComponent,
    IdentityComponent,
    SmartTableComponent,
    ErrorHandlingComponent,
    AnimationsComponent,
    ConstructorComponent,
    DependencyInjectionComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    FilterComponent,
    InputOutputComponent,
    ModuleComponent,
    RouteNavigationComponent,
    OneDataBindingComponent,
    TwoDataBindingComponent,
    StringInterpolationComponent,
    IntefaceComponent,
    TemplateReferenceVariableComponent,
    CustomDirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    AboutLawyComponent,
    ContactComponent,
    FilterSearchPipe,
    BasicPipe,
    BasicFilterPipeComponent,
    FilterPipe,
    CustomPipeComponent,
    LetterAbbreviationPipe,
    EnumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgQrScannerModule,
    QRCodeModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    CollapseModule,
    InputsModule,
    TooltipModule,
    ModalModule,
    PopoverModule,
    FormsModule,
    ButtonsModule,
    DropdownModule.forRoot(),
    LazyLoadImageModule,
    //TODO Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
