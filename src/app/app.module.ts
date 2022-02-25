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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
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
    LazyLoadImageModule
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
